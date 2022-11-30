const express = require('express');
const bodyParser = require('body-parser');
const port = 9000;
const app = express();
var todos = [{id:1,title:'Test Task1',is_completed:'true'},{id:2,title:'task2',is_completed:'false'}];
let count = todos.length;
// app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get('/v1/tasks',(request,response)=>{
    // response.render('index');
    response.status(200).json(todos)
});
app.post('/v1',(req,response)=>{
    var newtask = (req.body);
    console.log(req.body);
    todos.push(newtask);
    console.log(todos);
    // response.redirect('/v1/tasks')
    response.status(200).json(todos)
});
app.post('/v1/tasks',(request,response)=>{
    var newTodo = request.body;
    console.log(request.body);
    count = count + 1;
    newTodo.id = count;
    todos.push(newTodo);
    response.status(201).json(todos)
});
app.put('/v1/tasks/:id',(request,response)=>{
    var id = request.params.id;
    if(todos[id]){
        var updatedTodo = JSON.parse(request.body);
        todos[id] = updatedTodo;
        response.status(204).send();}
        else{
            response.status(404,'the task is not found').send();
        }
});
app.delete('/v1/tasks/delete/:id',(request,response)=>{
    var id = parseInt(request.params.id);
    if(todos.filter(todo=>todo.id == id).length !== 0){
        todos=todos.filter(todo=>todo.id !==id);
        response.status(200).send('successfully deleted');
      
    }
    else{
        response.status(404).send('Data not Found');
    }
});


app.listen(port,()=>{console.log(`${port} port is listening`);});
 
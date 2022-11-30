function Age_Calculator(){
    var date1 = document.getElementById("date").value;
    var month1 = document.getElementById("month").value;
    var year1 = document.getElementById("year").value;
    console.log(date1,month1,year1);
    var date = new Date();
    console.log(date);
    var date2 = date.getDate();
    var month2 = 1 + date.getMonth();
    var year2 = date.getFullYear();
    console.log("second date" , date2,month2,year2);
    var month = [31,28,31,30,31,31,30,31,30,31,30,31];
   
    if(date1 > date2){
        date2 = date2 + month[month - 1];
        month2 = month2 - 1;
    }
    if(month1 > month2){
        month2 = month2 + 12;
        year2 = year2 - 1;
    }
    var d = date2 - date1;
    var m = month2 - month1;
    var y = year2 - year1;
    if(date1 == "" || month1 == "" || year1 == ""){
        document.getElementById("age").innerHTML = "please fill all required fields"
    }
    else if(date1.match(/[a-z]/i)){
        document.getElementById("age").innerHTML = "Please input valid data for Date Field"

    }
    else if(month1.match(/[a-z]/i)){
        document.getElementById("age").innerHTML = "Please input valid data for Month Field"

    }
    else if(year1.match(/[a-z]/i)){
        document.getElementById("age").innerHTML = "Please input valid data for Year Field"

    }
    else if(month1.match(/[a-z]/i) && year1.match(/[a-z]/i)){
        document.getElementById("age").innerHTML = "Please input valid data for Month Field, Year Field"


    }
    else if(date1.match(/[a-z]/i) && year1.match(/[a-z]/i)){
        document.getElementById("age").innerHTML = "Please input valid data for Date Field, Year Field"
    }
    else if(date1.match(/[a-z]/i) && month1.match(/[a-z]/i)){
        document.getElementById("age").innerHTML = "Please input valid data for Date Field, Month Field"
    }
    else if(date1 >= 31 && month1 >= 12){
        document.getElementById("age").innerHTML = "Please input valid data for Date Field, Month Field" 
    }
    else{
    var age = document.getElementById("age").innerHTML = "Your Age is " +y+ " Years " +m+ " Months " +d+ " Days." ;
    console.log(age);
    }
}
import React from 'react';
import './home.css';

export default function image() {
    // const [search, setsearch] = useState("");
    
        
    function handleclick(e){
        // if(search){

        // }
    }
function handleChange(e){
    const text = e.target.value;
    console.log(text);


}
    return (
     
        <>
        <div className="main">
            <p className='center'>React Photo Search</p>
            <p className="bookmark">bookmark</p>
            <div className="image_form">
            <input type="text" placeholder="Search from high resolution images" onChange={handleChange}/>
           
            <button onClick={handleclick}><span>search</span></button>
            </div>
        </div>

        </>
     
    )
  }




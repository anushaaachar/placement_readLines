import React,{useState} from "react";
import fetchImage from "./fetchImage";

export default function photo(){
    const [page,setpage] = useState(1)
    const [images,setImage,error,load] = fetchImage(page,searchtype)

    return(load?(<div className="container">
        <h1>loading</h1>

    </div>):(
       
      <>
      <div className="image_container">
        {
            images.map((img,index)=>{return(
                
            )})
        }

      </div>
      </>
    ))

    
}

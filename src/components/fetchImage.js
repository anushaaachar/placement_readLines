import { useEffect,useState } from "react";
import Axios from 'axios';
 export default function fetchImage(page,searchtype){
    const [images,setImage] = useState([])
    const [error,seterror] = useState("")
    const [load,setload] = useState(true)
    const path = !searchtype? "/photos" : "/search/photos"
    const api ="https://unsplash.com"; 
    const key='qQaMf-QHIn0Y31VY95sNflm2f1JNcbRAOzGGYVHG7Kc';
    const url = `${api}${path}/?client_id=${key}&page=${page}&query=${searchtype}`  

    useEffect(()=>{
        setload(true)
        Axios.get(url).then(res=>{
            if(searchtype){
                setImage([...res.data.results]) 
            }
            else{
                setImage([...res.data])
            }
            setload(false);
        }).catch(e=>{seterror("something wrong url not found")
    })   

    },[page , searchtype])
    return [images,setImage,error,load]
 }
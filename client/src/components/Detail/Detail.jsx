import { useState } from "react"
import { Link, useParams} from "react-router-dom"

// import axios from "axios"
import { useEffect } from "react"



const Detail = ()=>{
    const {id}= useParams()
    //console.log(id)
    const [detail, setDetail]=useState({})
   
   // `http://localhost:3001/recipes/${payload}`
    useEffect(()=>{
        fetch(`http://localhost:3001/recipes/${id}`)
        .then((resp)=>resp.json())
        .then((data)=>{
            //console.log(data)
            if(data[0].name){
                setDetail(data)
            }else{
                window.alert("There isnt recipes with that id")
            }
        })


    },[id])
    
  


    return (
    <div>
       
         <label>Name: </label>
        <h1>{detail[0]?.name}</h1>
          
        <label>Id: </label>
        <p>{detail[0]?.id}</p>
        <label>Summary: </label>
        <p>{detail[0]?.summary}</p>
        <label>Healt Score: </label>
        <p>{detail[0]?.healthScore}</p>
        <label>Steps: </label>
        <p>{detail[0]?.steps?.map(el=>el.step)}</p><br></br>
        <label>Diets: </label>
        <p>{detail[0]?.diets.map(el=>el + " ")}</p>
        <img src={detail[0]?.image} alt="img not found"></img>



       <button><Link to="/home">Return</Link></button>
    </div>
    
    
    )
    
    
    }
    
    export default Detail
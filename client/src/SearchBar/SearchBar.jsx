import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {get_by_name} from "../../Redux/accions"


const SearchBar=()=>{
const dispatch = useDispatch()
const [name, setName]=useState("")


const handleInputChange=(event)=>{
event.preventDefault()
setName(event.target.value)
}

const handleSubmit=(event)=>{
    event.preventDefault()
    dispatch(get_by_name(name))
}


return (
    <div>
        <input type='text' placeholder="insert name..." onChange={(event)=>handleInputChange(event)}></input>
        <button type='submit' onClick={(event)=>handleSubmit(event)} ></button>
    </div>
)


}


export default SearchBar
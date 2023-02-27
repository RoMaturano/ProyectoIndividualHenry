import React from "react";
import { useState } from "react";
import style from "./SearchBar.module.css"





const SearchBar=({onSearch})=>{

const [name, setName]=useState("")


const handleInputChange=(event)=>{
setName(event.target.value)



}




return (
    <div>
        <input type='search' value={name} placeholder="insert name..." onChange={handleInputChange}></input>
        <button  onClick={()=>onSearch(name)} className={style.buttonSearch}>Search</button>
    </div>
)


}


export default SearchBar
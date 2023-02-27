import validation from "./Validation.js"
import React from "react"
import axios from "axios"
import { Link, useHistory } from "react-router-dom"
import {useState} from "react"

// import { useDispatch} from "react-redux";
import style from "./Formulario.module.css"

const Formulario = ()=>{
    // const diets= useSelector((state)=>state.diets)
   //  const dispatch = useDispatch()
    const history=useHistory()
const [form, setForm]=useState({
    name:"",
    healthScore:0,
    summary:"",
    steps:"",
    image:"",
    diets:""
})
const [errors,setErrors]=useState({})


// esta funcion lee lo que escribo y lo poen en el estado, para que del estado vaya 
// a los input
const changeHandler=(event)=>{
   setErrors(validation({...form,[event.target.name]:event.target.value}) ) 
    setForm({
            ...form,
            [event.target.name]:event.target.value
    })
    // setErrors(validation({
    //     ...form,
    //     [event.target.name]:event.target.value,
    // }))
   //esta es una forma de validacion en el momento
}
// de esta manera se controla el formulario. El estado es un reflejo del input y viceversa
//las validaciones son importantes porque asi se controlan los estados es decir la iinfo que va directo a la bd
// por otro lado es importante validar para que sea correcto para eso son los ESTADOS ERRORS   
const submitHandler= (event)=>{
   event.preventDefault()
   console.log(form)

     axios.post("http://localhost:3001/recipes",form)
    
    ///console.log(body)
    
    .then(res=>alert(res))
   
    history.push('/home')
}

const handleCheckBox=(event)=>{
if(event.target.checked){
    setForm({
        ...form,
        diets:[...form.diets, event.target.value]
    })
}
}





return (
    <form onSubmit={submitHandler}>
           <h1>Create your recipe!!! </h1>

           <button >
            <Link to='/home'>Home</Link>
            </button>

        <div>
        <label htmlFor="name" >Name</label>
        <input type="text" value={form.name} onChange={changeHandler} name="name" ></input>
        {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
        <label htmlFor="summary" >Summary</label>
        <input type="text" value={form.summary} onChange={changeHandler} name="summary" ></input>
         {errors.summary && <span className={style.pError}>     {errors.summary}    </span>}
        </div>

        <div>
        <label htmlFor="healtScore">HealthScore</label>
        <input type="number" value={form.healtScore} onChange={changeHandler} name="healtScore"  ></input>
        {errors.healtScore && <span>{errors.healtScore}</span>}
        </div>

        <div>
        <label htmlFor="steps">Steps</label>
        <input type="text" value={form.steps} onChange={changeHandler} name="steps"  ></input>
        {errors.steps && <span>{errors.steps}</span>}
        </div>

        <div>
        <label htmlFor="image">Image</label>
        <input type="text" value={form.image} onChange={changeHandler} name="image" ></input>
        
        </div>


        {/* {console.log(diets)} */}
       <div>
       <label>Diets</label>
       <label htmlFor=""><input type="checkbox"  name="vegan" value="vegan" onChange={handleCheckBox} />Vegan</label>
       <label htmlFor=""><input type="checkbox"  name="lacto ovo vegetarian" value="lacto ovo vegetarian" onChange={handleCheckBox}/>Lacto ovo vegetarian</label>
       <label htmlFor=""><input type="checkbox"  name="gluten free" value="gluten free" onChange={handleCheckBox}/>Gluten free</label>
       <label htmlFor=""><input type="checkbox"  name="primal" value="primal" onChange={handleCheckBox}/>Primal</label>


       <label htmlFor=""><input type="checkbox"  name="dairy free" value="dairy free" onChange={handleCheckBox}/>Dairy free</label>

       <label htmlFor=""><input type="checkbox"  name="paleolithic" value="paleolithic" onChange={handleCheckBox}/>Paleolithic</label>
       <label htmlFor=""><input type="checkbox"  name="whole 30" value="whole 30" onChange={handleCheckBox}/>Whole 30</label>    
        {errors.diets && <span>{errors.diets}</span>}
        </div>

      

        <button type="submit">Create Recipe </button>

        

   

    </form>
   
    
    
    )
    
    
    }
    
    export default Formulario




    // {diets.map((diet)=>{ 

    //     return (
            
    //         <option value={diet} key= {diet}>{diet}</option>

    //     ) })}
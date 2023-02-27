import { CardsContainer } from "../indexViews";
import {  useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { getAllFoods,filterCardByDiet,filterByCreated, filterByOrder,orderByScore} from "../../Redux/accions";
//import { Link } from "react-router-dom";
import style from "./Home.module.css"

const Home = () => {
  const dispatch = useDispatch();
  const [orden, setOrden ]=useState(" ")
  

  useEffect(() => {
    dispatch(getAllFoods());
  }, [dispatch]);

const handlerFilterDiet=(event)=>{
  dispatch(filterCardByDiet(event.target.value))
  
}

const handlerFilterCreated=(event)=>{
  dispatch(filterByCreated(event.target.value))
}

const handleSort=(event)=>{
  event.preventDefault()
  dispatch(filterByOrder(event.target.value))
  setOrden(`Ordenado ${event.target.value}`)
}

const handleSort2=(event)=>{
  dispatch(orderByScore(event.target.value))
  setOrden(`Ordenado ${event.target.value}`)
}





  return (
    <div className={style.mainContainer}>
      <h1>Home</h1>
      <div >

     

        <select className={style.options} onChange={handleSort} defaultValue={'DEFAULT'}>
          <option  disabled="disabled" value="DEFAULT">Order by A-Z / Z-A</option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>


        <select className={style.options} onChange={handlerFilterCreated} defaultValue={'DEFAULT'}>
          <option  disabled="disabled" value="DEFAULT">Filter By Stored</option>
          <option value="All">Todos</option>
          <option value="api">Existentes</option>
          <option value="created">Creados</option>
        </select>

        <select className={style.options} onChange={handleSort2}>
          <option  disabled="disabled">Healt Score</option>
          <option value="Morehealthy">More healthy </option>
          <option value="Lesshealthy">Less healthy</option>
        </select>

        <select onChange={handlerFilterDiet} className={style.options} defaultValue={'DEFAULT'}>
          <option  disabled="disabled" value="DEFAULT">Filter By Diet</option>
          <option value="All">All</option>
          <option value="vegan">Vegan</option>
          <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
          <option value="gluten free">Gluten Free</option>
          <option value="primal">Primal</option>
          <option value="pescatarian">Pescetarian</option>
          <option value="ketogenic">Ketogenic</option>
          <option value="dairy free">Dairy free</option>
          <option value="fodmap friendly">Fodmap friendly</option>
          <option value="paleolithic">Paleolithic</option>
          <option value="whole 30">Whole 30</option>
        </select>

      
        
      </div>
      <CardsContainer/>
          

       
      </div>
    
  );
};

export default Home;

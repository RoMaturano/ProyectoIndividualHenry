import { Card,Paginado } from "../indexViews"
import {useSelector} from 'react-redux'
import style from "./CardsContainer.module.css"
import {   useState } from "react";




const CardsContainer =()=>{

     const allFoods= useSelector((state)=>state.foods)
    // console.log(allFoods)

     const [currentPage, setCurrentPage] = useState(1); // este estado local almacena las card en pagina actual y empieza en 1
     const [cardWithPage, setCardsWithPage] = useState(9); //este estado local setea cuantas cards por pagina
     const indexLastCards = currentPage * cardWithPage; //indice del ultimo personaje que es indice de pagina por personajes por pagina
     const indexOfFirstCard = indexLastCards - cardWithPage; //indice del primer card que es indice del ultimo menos la cantidad de cards
     
     const currentCards = allFoods.slice(indexOfFirstCard, indexLastCards);
   
    //console.log(currentCards)
     const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      

    return (
<div>

<div className={style.nose}>
        <Paginado
            cardWithPage={cardWithPage}
            allFoods={allFoods.length}
            paginado={paginado}
            
            />
        </div>


        <div className={style.cardsContainer}>
            
        
            
         {currentCards?.map((el) => {
             return (
                 
                 
                 
                <Card
                key={el.id}
                id={el.id} 
                name={el.name}
                diets={el.diets}
                helatScore={el.helatScore}
                steps={el.steps}
                image={el.image}
                
                />
                
                
                );
            })}

        </div>
            </div>
    )

}


export default CardsContainer
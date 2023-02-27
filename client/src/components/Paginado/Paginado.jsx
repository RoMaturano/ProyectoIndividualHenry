import React from 'react';
import style from "./Paginado.module.css"


const Paginado=({cardWithPage,allFoods,paginado})=>{

    const pageNumbers=[]
// voy a recorrer u n arreglo en el que voy a tomar el numero redondo
    for (let i = 1; i <=Math.ceil(allFoods/cardWithPage); i++) {//el math ceil redondea para arriba todos las
        // cards sobre las card que quierpo por pagina
        pageNumbers.push(i)
        // con esto que genero, lo pusheo y resulta un arreglo de numeros que luego pregunto si lo tengo
        // y luego si lo tengo lo mapeo
    }
    return (
        <nav className={style.div}>
            <ul >
                
           
                {pageNumbers?.map(number=>( 
                    
                    <li key={number} className={style.li}>  
                    <button onClick={()=>paginado(number) } className={style.number}>{number}</button>
                    </li>
                    
                ))}
            </ul>
        </nav>

    )

}



export default Paginado
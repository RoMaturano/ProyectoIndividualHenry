import axios from "axios"
import {GET_ALL_FOODS,FILTER_BY_DIET,FILTER_BY_CREATED,ASCEND_DESCEN,GET_BY_NAME,HEALTY_SCORE,GET_DIETS} from "./accionsTypes"

//http://localhost:3001/recipes
// Buscar recetas.
// Visualizar la información de las recetas.=  getAllFoods
// Filtrarlas.
// Ordenarlas.
// Crear nuevas recetas.

export const getAllFoods=()=>{// Visualizar la información de las recetas.
    return async (dispatch)=>{
        
            const response = await axios.get(`http://localhost:3001/recipes`)
            const data = response.data
       
       //console.log(data)
          dispatch({//este dispatch lo recibe el reducer
            type:GET_ALL_FOODS,
            payload:data
        })
    }
}




export const filterCardByDiet=(payload)=>{
    
return{
    type:FILTER_BY_DIET,
    payload
}


}

export const filterByCreated=(payload)=>{

    return{
        type:FILTER_BY_CREATED,
        payload
    }


}

export const filterByOrder=(payload)=>{
    return{
        type:ASCEND_DESCEN,
        payload
    }
}





export const get_by_name=(name)=>{
    return async (dispatch)=>{
        
            const  response= await axios.get(`http://localhost:3001/recipes?name=${name}`)
             let data= response?.data
             console.log(data)
            return dispatch({
                type:GET_BY_NAME,
                payload: data
            })
       
    }    
}

export const orderByScore=(payload)=>{
return{
    type:HEALTY_SCORE,
    payload
}
}


export const getDiets=()=>{
return async (dispatch)=>{
    const responseDiets = await axios.get(`http://localhost:3001/diets`)
// console.log(responseDiets)
return dispatch({type:GET_DIETS, payload :responseDiets.data})

}


}











   
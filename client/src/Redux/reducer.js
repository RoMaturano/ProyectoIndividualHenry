 import {GET_ALL_FOODS,FILTER_BY_DIET,FILTER_BY_CREATED,ASCEND_DESCEN,GET_BY_NAME,HEALTY_SCORE,GET_DIETS} from "./accionsTypes"

const initialState={
    foods:[],
    allFoods:[],
    diets:[]
    
  
}

const reducer =(state= initialState,action)=>{

    switch(action.type){

        case GET_ALL_FOODS:
            return{
                ...state,
                foods:action.payload, // aca le digo en mi estado food guarda todolo que te mande la action GET_ALL_FOODS
                allFoods:action.payload
            }
            
            
        case FILTER_BY_DIET:
            const allFoods= state.allFoods
           //console.log(allFoods)
           if(action.payload=== 'All'){
            const  dietsFilter=allFoods
            return {
                ...state,
                foods:  dietsFilter
            }
           }else{
            
        const filterDiets=allFoods.filter(res=>res.diets?.some(el=>el.toLowerCase()=== action.payload.toLowerCase()))
        //     const filterDiets= allFoods.map(el=>el.diets)
        //     // console.log(filterDiets)

        //    filterDiets.filter(el=>el.diets?.some(d=>d===action.payload))
        //    console.log(action.payload)
        //     console.log(filterDiets)
              

            return{
                ...state,
                foods:  filterDiets
            }
           }
            //const dietsFilter=action.payload === 'All'? allFoods : allFoods.filter(el=>el.diets === action.payload) )
            // console.log(dietsFilter)
          

        case FILTER_BY_CREATED:
         const allFoods2= state.allFoods
        const filterByCreated = action.payload ==="created"? allFoods2.filter(el=>el.createdInDb) : allFoods2.filter(el=>!el.createdInDb)
            return{
                ...state,
                foods:action.payload==="All"? allFoods2 : filterByCreated
            }


        case ASCEND_DESCEN:
            let srtArray= action.payload=== "ascendente"?
            state.foods.sort((a,b)=>{
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return 1
                }
                if(b.name.toLowerCase()>a.name.toLowerCase()){
                    return -1
                }
                return 0
            }) :
            state.foods.sort((a,b)=>{
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return -1
                }
                if(b.name.toLowerCase()>a.name.toLowerCase()){
                    return 1
                }
                return 0
                
            })
            return{
                ...state,
                foods:srtArray
            }

            case GET_BY_NAME:
                return{
                    ...state,
                    foods:action.payload
                }


            
            case HEALTY_SCORE:
                let sortArray=[...state.foods]
                 sortArray= action.payload=== "Morehealthy"?
                state.foods.sort((a,b)=>{
                    if(a.healthScore>b.healthScore){
                        return 1
                    }
                    if(b.healthScore>a.healthScore){
                        return -1
                    }
                    return 0
                }) :
                state.foods.sort((a,b)=>{
                    if(a.healthScore>b.healthScore){
                        return -1
                    }
                    if(b.healthScore>a.healthScore){
                        return 1
                    }
                    return 0
                    
                })
                return{
                    ...state,
                    foods:sortArray
                }
               
               

                case GET_DIETS:
                    return{
                        ...state,
                        diets:action.payload
                        
                    }

             
                    
                    
                    default:
                return { ...state };
            }



    }









export default reducer
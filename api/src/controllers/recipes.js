const axios = require("axios");
require("dotenv").config();
const { YOUR_API_KEY } = process.env;
const { Recipe, Diet } = require("../db");


//----------------Trae toda la info de la api     1

const getApiInfo = async () => {   
  try {
let info=[]
  //   let i=1
  //   while(i<=10){
  //     const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&&page=${i}`)
  //    info.push(apiUrl.data)
  //   //   //`https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true`
  //   //   //https://apimocha.com/n.s.recipes/allrecipes
  //     i++
  // }

    const apiUrl = await axios.get(`https://apimocha.com/n.s.recipes/allrecipes`)
    info.push(apiUrl.data)

      //console.log(info)
      //console.log(info.length)
      info = (await Promise.all(info)).map(resp=> resp.results.map(el=>{
      return ({
        id: el.id,
        name: el.title,
        healthScore: el.healthScore,
        image: el.image,
        diets: el.diets?.map((el) => el),
        steps:el.analyzedInstructions[0]?.steps.map(e => {
          return {
            number: e.number,
            step: e.step
          }
        }),
        summary: el.summary,

      })

    }))
   //console.log(info)
    let apiInfo=[]
    info.map(results=>{apiInfo= apiInfo.concat(results)})
    //console.log(apiInfo)
   //console.log(apiInfo)
    return apiInfo
  } catch (error) {
   // console.log(error)
    return {error: error.message}
  }
};

//console.log(getApiInfo())
//getApiInfo()
//---------------------info de la BD    2

const getDbInfo = async () => {
 
  try {
    //console.log(await Recipe.findAll())
    return await Recipe.findAll({
      include: {
        // incluyo este modelo para que me traiga las recetas con Diet
        model: Diet,
        attributes: ["name"], // con esto me trae name y id de Diet
        through: {//mediante los atributos, es una comprobacion para traer el atributo name
          attributes: [],
        },
      }
    })
    //console.log(infoDB)
  } catch (error) {
    return {error: error.message};
  }
};

//console.log(getDbInfo())
//getDbInfo()

//---------------Concatena la info de la api y de la bd 3
const getAllInfo = async () => {
  try {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    //const infoTotal = apiInfo.concat(dbInfo);
    const infoTotal= [...apiInfo,...dbInfo]
    //console.log("aca")
    
    // console.log(infoTotal)
    return infoTotal;

  } catch (error) {
    return {error: error.message};
  }
};
//console.log(getAllInfo())

// HASTA ACA ESTA OK SEGUN YO

//-------------------Trae por id      4

const getAllInfoId= async (id)=>{
  const recipeTotal= await getAllInfo()
  if(id){
    let recipeId= await recipeTotal.filter(el=>Number(el.id)===Number(id))
    return recipeId
  }
}


//----------------filtra por nombre      5
const filterByName= async(name)=>{
try {
  const recipesTotal= await getAllInfo()
  let recipeByName= await recipesTotal.filter(element=> element.name.toLowerCase().includes(name.toString().toLowerCase()))
 
  
    let recipeName= recipeByName?.map(element=>{
        return {
            id:element.id,
            name:element.name,
            diets: element.diets? element.diets : element.diets.map(e=>e.name),
            healthScore:element.healthScore,
            image:element.image,
            
        }
    })
    return recipeName
  
} catch (error) {
  return{error:error.message}
}
  
}




// const createRecipe= async(name, summary, healthScore, steps, diets, createdInDb, image)=> await Recipe.create({
//   name, summary, healthScore, steps, diets, createdInDb, image
// })


// //----------------------------------- 6

// const postRecipe= async (req, res)=>{
// try {
//   const { name, summary, healthScore, steps, diets, createdInDb, image }=req.body
  
//   const newRecipe= await createRecipe(name, summary, healthScore, steps, diets, createdInDb, image)

//   return res.status(200).json(newRecipe)
// } catch (error) {
//   return res.status(404).json({error:error.message})
// }
  
// }
//console.log(postRecipe())


module.exports={
    getApiInfo,
    getDbInfo,
    getAllInfo,
    getAllInfoId,
    filterByName,

   


    
    
    



}


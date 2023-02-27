const axios = require("axios");
require("dotenv").config();
const { YOUR_API_KEY } = process.env;
const { Recipe, Diet } = require("../db");




const getAllDiets= async()=>{
    try {
        // https://apimocha.com/n.s.recipes/allrecipes
        // https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true
        const apiDiets= await axios.get (`https://apimocha.com/n.s.recipes/allrecipes`)
        const data=apiDiets.data.results
        //console.log(data)
        const dietTypDb = []
        const alldiets= data.map(el=>el.diets)
        // console.log(alldiets)
        alldiets.map (el=>{
            for (let i = 0; i < el.length; i++) {
                if(el[i]!== "undefined"){
                    if(!dietTypDb.includes(el[i]))
                    dietTypDb.push(el[i])
                }
                
            }
        })
        // console.log(dietTypDb)
        //'gluten free', 'ketogenic', 'vegetarian', 'lacto vegetarian','ovo vegetarian', 'lacto ovo vegetarian', 'vegan', 'pescetarian', 'paleolithic', 'primal', 'low fodmap', 'whole 30', 'dairy free'
        dietTypDb.forEach((diet)=>{Diet.findOrCreate({
            where: {name:diet}
        })})
        //console.log(dietTypDb)
          let allDietsBaseDatos= await Diet.findAll()
          let alldietsFinally=allDietsBaseDatos.map(el=>el.name)

         //console.log(alldietsFinally)
          
          return alldietsFinally
                
            
    } catch (error) {
        return {error:error.message}
    }
}

//onsole.log(getAllDiets())









module.exports = {
    getAllDiets
}
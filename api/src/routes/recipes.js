// const dietTypDb = ['gluten free', 'ketogenic', 'vegetarian', 'lacto vegetarian','ovo vegetarian', 'lacto ovo vegetarian', 'vegan', 'pescetarian', 'paleolithic', 'primal', 'low fodmap', 'whole 30', 'dairy free'];

require("dotenv").config();
const { Recipe, Diet } = require("../db");
const axios = require("axios");
const {
  getAllInfo,
  getAllInfoId,
  filterByName
} = require("../controllers/recipes");
const recipesRouter = require("express").Router();
const cors = require("cors");
recipesRouter.use(cors());


//------------------------------- buscar todas o por nombre
recipesRouter.get("/", async (req, res) => {
  // console.log(recipesTotal)
  try {
    const recipesTotal = await getAllInfo();
    const { name } = req.query;

    // console.log(recipesTotal)
    if (name) {
      let recipeName = await filterByName(name);
      return res.status(200).send(recipeName);
    } else {
      return res.status(200).json(recipesTotal);
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
});


//------------------------------- buscar por id
recipesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipeTotal = await getAllInfoId(id);

    return res.status(200).json(recipeTotal);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

//------------------------------- Crear
recipesRouter.post("/", async (req, res) => {
  try {
    const { name, summary, healthScore, steps, diets, createdInDb, image }=req.body; //hago el post con todo lo que me llega por body
    //creo el personaje con todo esto
      const newRecipe = await Recipe.create({name,summary,createdInDb,healthScore,steps,image});
        // no le paso diet porque tengo que hacer la relacion aparte
        //console.log(newRecipe)
         let dietsandRecipeInDB = await Diet.findAll({
        //   // y aca busco las ocupaciones que coincidan con esto que le estoy pasando por body
          where: { name: diets }
         });
         newRecipe.addDiet(dietsandRecipeInDB);
        //newRecipe.save();
      return res.status(200).json(newRecipe);
  } catch (error) {
    //console.log(error)
    return res.status(404).json({error:error.message});
  }
});

module.exports = recipesRouter;




// recipesRouter.post("/", async (req, res) => {
//   try {
//     const { name, summary, healthScore, steps, diets, createdInDb, image } =
//       req.body; //hago el post con todo lo que me llega por body
//     if (!name || !summary || !healthScore || !steps)
//       throw Error("Me faltan datos");
//     else {
//       const newRecipe = await Recipe.create({ //creo el personaje con todo esto
//           name,
//           summary,
//           createdInDb,
//           healthScore,
//           steps,
//           image,
          
//         });
//         // no le paso diet porque tengo que hacer la relacion aparte
//         //console.log(newRecipe)
//         // let dietsandRecipeInDB = await Diet.findAll({
//         //   // y aca busco las ocupaciones que coincidan con esto que le estoy pasando por body
//         //   where: { diets: diets },
//         // });
//         // newRecipe.addDiet(dietsandRecipeInDB);
//         newRecipe.save();
//       return res.status(200).json(newRecipe);
//     }
//   } catch (error) {
//     //console.log(error)
//     return res.status(404).send(error.message);
//   }
// });
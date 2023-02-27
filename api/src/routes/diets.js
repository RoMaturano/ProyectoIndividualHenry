require('dotenv').config();
const {Recipe, Diet}= require('../db')
const axios=require("axios")
const {getAllDiets}= require ('../controllers/diet')
const dietRouter = require('express').Router()
const cors = require("cors")
dietRouter.use(cors())



dietRouter.get("/", async  (req,res)=>{// aca me busca los elementos de la api y los manda a la base de datos
    //console.log("acaa")
    const {diets}=req.body
    try {
        let infoDiet= await getAllDiets(diets)
//console.log(infoDiet)
return res.status(200).json(infoDiet)

    } catch (error) {      
        return   res.status(404).send(`Not Found Diets`)
    }


})



























module.exports= dietRouter





// dietRouter.get("/", async  (req,res)=>{// aca me busca los elementos de la api y los manda a la base de datos
//     //console.log("acaa")
//     try {
//         const dietsApi= await getAllInfo()
// //['gluten free', 'ketogenic', 'vegetarian', 'lacto vegetarian','ovo vegetarian', 'lacto ovo vegetarian', 'vegan', 'pescetarian',
// // 'paleolithic', 'primal', 'low fodmap', 'whole 30', 'dairy free'];
//  const dietsTotal= dietsApi.map(element=>element.diets)
//  //console.log(dietsTotal)
//  const dietsEach=dietsTotal.map(el=>{
// for (let i = 0; i < el.length; i++)return el[i]
// // {
// //     if(el[i]!=="undefined")dietsEach.push(el[i])
    
// // }
// })
// dietsEach.forEach(el => {
//       Diet.findOrCreate({// pongo el finOrCreare para que lo busque primero y si no esta lo crea
//         where:{name:el}// creame esto donde nombre sea el elemento que te estoy pasando
    
//     })
    
// });
// console.log(dietsEach)
// // si el force esta seteado en force viene aca directamente y lo busca en bd
// const allDiets = await Diet.findAll()// aca guarda todas las ocupaciones del medole

// //console.log(allDiets)
// return res.status(200).send(allDiets)

        
//     } catch (error) {
               
//         return   res.status(404).send(`Not Found Diets`)
//     }


// })
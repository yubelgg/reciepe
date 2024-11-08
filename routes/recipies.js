import express from "express";
import Recipe from "../models/Recipe.js";

const router = express.Router();

router.get("/", async (req, res) => {
    // const time = req.query.time;  
    // const type = req.query.type;
    // console.log(time);
    // console.log(type);

    // // assemble db query using query params
    // if (time && type) {
    //     console.log("Getting recipes with time and type");
    // } else if (time)
    //     console.log("Getting recipes with time...");
    // else if (type) {
    //     console.log("Getting recipes with type...");
    // } else {
    //     console.log("invalid query params");
    // }

    // return filtered data
    const recipies = await Recipe.find({});
    console.log(recipies);
    res.json(recipies);
    // res.send("Recipies");
})

router.post("/", async (req, res) => {
    // get recipe
    // const recipe = req.body;
    // console.log(recipe);

    // // add
    // const r = new Recipe(recipe);
    // console.log(r);
    // await r.save();
    // console.log("Added recipe to db");
    res.status(200).send("Added recipie");
})

// replace with better validation
// function isValidRecipe(recipe) {
//     return (Object.keys(recipe).length !== 0 && 
//     recipe.hasOwnProperty("name") && 
//     recipe.hasOwnProperty("cookTime"));
// }

export default router;
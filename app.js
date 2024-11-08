import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import recipeRouter from "./routes/recipies.js";
import Recipe from "./models/Recipe.js";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", async (req, res) => {
    const recipies = await Recipe.find();
    console.log(recipies.length)
    console.log(recipies);
    res.send("Hello from menu-maker API");
})

app.use("/recipies", recipeRouter);

app.all('/*', (req, res) => {
    res.status(404).send("This route does not exist");
});

async function start() {
    try {
        const user = process.env.DB_USERNAME;
        const password = process.env.DB_PASSWORD;
        const uri = `mongodb+srv://${user}:${password}@menu-maker-cluster.16jf5.mongodb.net/menu-maker?retryWrites=true&w=majority&appName=menu-maker-cluster/`;
        await mongoose.connect(uri);
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
            console.log(user);
            console.log(password);
        });
    } catch (error) {
        console.log(error);
    }
    
}

start();
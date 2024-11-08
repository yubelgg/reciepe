import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipies.js";

const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${user}:${password}@menu-maker-cluster.16jf5.mongodb.net/?retryWrites=true&w=majority&appName=menu-maker-cluster`;
mongoose.connect(uri);

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from menu-maker API");
})

app.use("/recipies", recipeRouter);

app.all('/*', (req, res) => {
    res.status(404).send("This route does not exist");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema({
    title: String,
    totalTime: String,
    servings: String,
    cuisine: String,
    ingredients: [
        {
            ingredient: String,
            unit: String,
            quantity: String,
            quantityNum: Number
        }
    ],
    steps: [String],
    type: [String],
    source: {
        name: String,
        uri: String
    }
})

const recipeModel = mongoose.model("Recipe", recipeSchema);
export default recipeModel;
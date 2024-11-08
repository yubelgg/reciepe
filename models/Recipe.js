import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    totalTime: {
        type: Number,
        required: true
    },
    servings: {
        type: Number,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [
            {
                ingredient: {
                    type: String,
                    required: true
                },
                unit: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true
    },
    steps: [String],
    type: [String],
    source: {
        type: {
            name: {
                type: String,
                required: true,
            },
            uri: {
                type: String,
                required: true,
            }
        },
        required: true
    }
})

const recipeModel = mongoose.model("recipies", recipeSchema);
export default recipeModel;
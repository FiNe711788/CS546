const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require("node-uuid");

module.exports = {
    async getRecipesById(id) {
        if (!id) {
            throw "You must provide an ID";
        }
        const recipesCollection = await recipes();
        const recipe = recipesCollection.findOne({ _id: id });
        if (!recipe)
            throw "Recipe not found";
        return recipe;
    },
    async getAllRecipes() {
        try {
            const recipesCollection = await recipes();
            return await recipesCollection.find({}).toArray();
        } catch (error) {
            throw error;
        }
    },
    async addRecipe(title, ingredients, steps) {
        if (!title)
            throw "You must provide a title";
        if (!steps || !Array.isArray(steps))
            throw "Steps invalid";
        try {
            const recipesCollection = await recipes();
            const newRecipe = {
                _id: uuid.v4(),
                title: title,
                ingredients: ingredients,
                steps: steps
            };
            const insertInfo = await recipesCollection.insertOne(newRecipe);
            if (insertInfo.insertedCount === 0) throw "Could not add recipe";
            const recipe = await this.getRecipesById(insertInfo.insertedId);
            return recipe;
        } catch (error) {
            throw error;
        }
    },
    async  deleteRecipe(id) {
        if (!id) throw "You must provide an ID";
        const recipeCollection = await recipes();
        const deletionInfo = await recipeCollection.removeOne({ _id: id });
        if (deletionInfo.deletedCount === 0) {
            throw "Could not delete recipe";
        }
    },
    async  updateRecipe(id, updatedRecipe) {
        const recipeCollection = await recipes();
        const updatedRecipeData = {};
        if (updatedRecipe.title) {
            updatedRecipeData.title = updatedRecipe.title;
        }
        if (updatedRecipe.ingredients && (updatedRecipe.ingredients[0].name) && updatedRecipe.ingredients[0].amount) {
            updatedRecipeData.ingredients = updatedRecipe.ingredients;
        }
        if (updatedRecipe.steps && Array.isArray(updatedRecipe.steps)) {
            updatedRecipeData.steps = updatedRecipe.steps;
        }
        let updatedCommand = {
            $set: updatedRecipeData
        };
        const query = {
            _id: id
        };
        await recipeCollection.updateOne(query, updatedCommand);
        return await this.getRecipesById(id);
    }
};
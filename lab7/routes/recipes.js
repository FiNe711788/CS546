const express = require("express");
const router = express.Router();
const data = require("../data");
const recipesData = data.recipes;

router.get("/:id", async (req, res) => {
    try {
        const recipe = await recipesData.getRecipesById(req.params.id);
        res.json(recipe);
    } catch (e) {
        res.status(404).json({ message: "Recipe not found" });
    }
});
router.get("/", async (req, res) => {
    try {
        const recipeList = await recipesData.getAllRecipes();
        res.json(recipeList);
    } catch (e) {
        res.status(500).send();
    }
});
router.post("/", async (req, res) => {
    try {
        let recipePostData = req.body;
        const newRecipe = await recipesData.addRecipe(recipePostData.title, recipePostData.ingredients, recipePostData.steps);
        res.json(newRecipe);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});
router.put("/:id", async (req, res) => {
    let updateData = req.body;
    try {
        await recipesData.getRecipesById(req.params.id);
    } catch (e) {
        res.status(404).json({ error: "Recipe not found" });
    }
    try {
        const updatedrecipe = await recipesData.updateRecipe(req.params.id, updateData);
        res.json(updatedrecipe);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});
router.patch("/:id", async (req, res) => {
    let updateData = req.body;
    try {
        await recipesData.getRecipesById(req.params.id);
    } catch (e) {
        res.status(404).json({ error: "Recipe not found" });
    }
    try {
        const updatedrecipe = await recipesData.updateRecipe(req.params.id, updateData);
        res.json(updatedrecipe);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        await recipesData.getRecipesById(req.params.id);
    } catch (e) {
        res.status(404).json({ error: "Recipe not found" });
    }
    try {
        await recipesData.deleteRecipe(req.params.id);
        res.sendStatus(200);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

module.exports = router;
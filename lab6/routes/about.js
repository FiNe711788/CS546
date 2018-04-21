const express = require("express");
const router = express.Router();
const info = {
    "name": "Fanyu Wang",
    "cwid": "10427157",
    "biography": "My name is Fanyu Wang.\nA graduate student at Stevens Institute of Technology.",
    "favoriteShows": ["Black Mirror", "Silicon Valley", "House of Cards"],
    "hobbies": ["Music", "Movie", "Traveling"]
};

router.get("/", (req, res) => {
    try {
        res.json(info);
    } catch (error) {
        res.status(500).send();
    }
});
module.exports = router;
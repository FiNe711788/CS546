const express = require("express");
const router = express.Router();
const story = {
    "storyTitle": "A Dry Joke",
    "story": "Three tomatoes are walking down the street, Papa Tomato, Momma Tomato and Baby Tomato.\nBaby Tomato starts lagging behind.\nAnd Papa Tomato gets really angry, goes back and squishes him, says, 'Ketchup.' (Catch Up)"
}
router.get("/", (req, res) => {
    try {
        res.json(story);
    } catch (error) {
        res.status(500).send();
    }
});
module.exports = router;
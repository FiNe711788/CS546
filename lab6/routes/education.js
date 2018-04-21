const express = require("express");
const router = express.Router();
const education = [
    {
        "schoolName": "Weifang No.1 Middle School",
        "degree": "Senior High School Graduation",
        "favoriteClass": "Mathematics",
        "favoriteMemory": "We have courses of traditional arts. Such as making kites, carving and ink painting."
    },
    {
        "schoolName": "Qingdao University of Science and Technology",
        "degree": "Bachelor of Engineering",
        "favoriteClass": "Data Structure",
        "favoriteMemory": "There is a nice and quiet cafe in campus. My friends and I had a great time there."
    },
    {
        "schoolName": "Stevens Institute of Technology",
        "degree": "Master of Science",
        "favoriteClass": "CS546 Web Programming",
        "favoriteMemory": "My band had a show on 2017 Mid-Autumn Festival Gala."
    }
];

router.get("/", (req, res) => {
    try {
        res.json(education);
    } catch (error) {
        res.status(500).send();
    }
});
module.exports = router;
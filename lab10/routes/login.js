const express = require("express");
const router = express.Router();
const data = require("../data/users");
const bcrypt = require("bcryptjs");
router.get("/", async (req, res) => {
    try {
        if (req.cookies && req.cookies.AuthCookie) {
            res.redirect('/private');
        } else {
            res.render('static/login', { layout: false });
        }
    } catch (e) {
        console.log('error', e);
    }
});
router.post("/login", async (req, res) => {
    const userReqData = req.body;
    const username = userReqData.username;
    const user = await data.findByUsername(username);
    if (!user) {
        res.render('static/login', { layout: false, messages: "Invalid username or password!" });
        return;
    }
    const plainTextPassword = userReqData.password;
    const isMatched = await bcrypt.compare(plainTextPassword, user.hashedPassword);
    if (isMatched) {
        res.cookie('AuthCookie', user._id, { expires: new Date() });
        res.redirect('/private');
    } else {
        res.render('static/login', { layout: false, messages: "Invalid username or password!" });
    }
});
router.get("/private", async (req, res) => {
    try {
        if (req.cookies && req.cookies.AuthCookie) {
            const user = await data.findById(req.cookies.AuthCookie);
            if (user) {
                res.render("layouts/main", { 
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    profession: user.profession,
                    bio: user.bio });
            }
        } else {
            res.status(403).render('static/denied', { layout: false });
        }
    } catch (e) {
        console.log('error', e);
    }
});

router.get("/logout", async (req, res) => {
    try {
        res.clearCookie("AuthCookie");
        res.render('static/login', { layout: false, messages: "Logout successfully!" });
    } catch (e) {
        console.log('error', e);
    }
});

module.exports = router;
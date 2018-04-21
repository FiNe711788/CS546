const constructorMethod = app => {
    app.get("/", (req, res) => {
        res.render("palindrome/static", {});
    });
};
module.exports = constructorMethod;
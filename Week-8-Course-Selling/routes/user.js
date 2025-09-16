const express = require('express');
const { userModel } = require("../db");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "hardikar123"

userRouter.post("/signup", async function(req, res) {
    const { email, password, firstname, lastname } = req.body; // <-- fixed typo
    // TODO: hash the password so the plaintext password is not stored in the database
    await userModel.create({
        email: email,
        password: password, // hash this in real code
        firstname: firstname,
        lastname: lastname,
    });
    res.json({
        message: "signup endpoint"
    });
});

userRouter.post("/signin", function(req, res) {
    res.json({
        message: "signin endpoint"
    });
});

userRouter.get("/purchases", function(req, res) {
    res.json({
        message: "purchase endpoint"
    });
});

module.exports = {
    userRouter
};

const express = require('express');
const { userModel } = require("../db");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = require("../config");
const user = require('../middleware/user');

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

userRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    });
    
    if(user) 
    {
        const token = jwt.sign({
            id: user._id,
            email: "harkirat@gmail.com"
        }, JWT_USER_PASSWORD);
    
       res.json({
        token: token
       });
   } 
   else 
    {
        res.status(403).json({
            message: "signin endpoint"
        });
    }
});

userRouter.get("/purchases", function(req, res) {
    res.json({
        message: "purchase endpoint"
    });
});

module.exports = {
    userRouter
};

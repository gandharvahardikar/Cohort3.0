const express = require('express');
const jwt = require ("jsonwebtoken");

const JWT_SECRET = "gandharva123";

const app = express();

const users = []

app.post("/signup", function(req,res) {
     const username = req.body.username
     const password = req.body.username
     user.push({
        username: username,
        password: password

     })
})

app.post("/signin", function(req,res) {


})

app.post("/me", function(req,res) {

})
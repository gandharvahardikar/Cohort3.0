const express = require("express");
const {UserModel, TodoModel} = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "asdasd123@23";

mongoose.connect("mongodb+srv://gandharvahardikar:gandharvamongo999%2A@cluster0.8crovsj.mongodb.net/todo-gandharva")
const app = express();
app.use(express.json())

app.post("/signup", async function(req, res) {
     const username = req.body.username;
     const password = req.body.password;
     const name = req.body.name;
     
     await UserModel.create ({
        email: email,
        password: password,
        name: name
     })

     res.json ({
        message: "You are logged in"
     })
});

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })
    
    console.log(user);

    if (user) {   
        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        res.json({
            token: token
        });
    }
    else {
        res.status(403).json({
            messsage: "Incorrect Credentials"
        })
    }

});

app.post("/todo", function(req, res) {

});

app.get("/todos", function(req, res) {

});

console.log("Starting server...");

mongoose.connect("mongodb+srv://gandharvahardikar:gandharvamongo999%2A@cluster0.8crovsj.mongodb.net/todo-gandharva")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch(err => {
        console.error("Mongo connection error:", err);
    });


app.use(express.json());

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

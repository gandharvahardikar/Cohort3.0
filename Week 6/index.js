const express = require('express'); // initializes express or imports

const app = express();// creates an Express app instance


function signinHandler(req, res) // Logic for handling signup goes here
{
        
}

app.post("/signup", signinHandler) // registers POST/signup endpoint with the handler

app.post("/signin", function(req, res) // logic for handling signin goes here
{

})

app.listen(3000); // that the http server is listening on port 3000

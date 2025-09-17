const jwt = require("jsonwebtoken");
const {JWT_USER_PASSWORD} = "hardikar123"

function userMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_USER_PASSWORD);

    if (decoded) {
        req.userID = decoded.indexOf;
        next()
    }   else {
        res.status(403).json({
            message: "You are not signed in"
        })
    } 
}


module.exports = {
    userMiddleware: userMiddleware
}
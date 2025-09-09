const userRouter = Router();

{

  // these are the endpoints here
   userRouter.post("/user/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    })

    }) 

    userRouter.post("/user/signin", function(req, res) {
    res.json({
        message: "signup endpoint"
    })

    })


    userRouter.get("/user/purchases", function(req, res) {
    res.json({
        message: "signup endpoint"
    })

    })
}

module.exports = {
     UserRouter: UserRouter
}
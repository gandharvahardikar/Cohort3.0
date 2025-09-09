function createCourseRoutes(app) {


    app.post("/courses/purchases", function(req, res){
    // you would expect user to pay you  money
     res.json({
        message: "signup endpoint"
     })
})

app.get("/courses", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})
}

module.exports = {
    createCourseRoutes: createCourseRoutes
}
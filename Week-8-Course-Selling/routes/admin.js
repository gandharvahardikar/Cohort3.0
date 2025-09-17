const {Router} = require("express");
const adminRouter = Router();
const {adminModel, courseModel} = require("../db");
const {JWT_ADMIN_PASSWORD} = require("../config");

adminRouter.post("/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/course",adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const {title, description, imageUrl, price} = req.body;
    const course = await courseModel.create({
        title, description, imageUrl, price, creatorId : adminId
    })
    res.json({
        message: "course created",
        courseId : course._id
    })
})

adminRouter.put("/course", async function(req, res) {
    const adminId = req.userId;

     const {title, description, imageUrl, price, courseId} = req.body;
     
     const course = await courseModel.updateOne({

        _id: CourseId,
        creatorId: adminId
     }, {
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price
     })

    res.json({
        message: "course updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk", adminMiddleware, async function(req, res) {
    const adminId = req.userId;
    const course = await courseModel.updateOne({

        _id: CourseId,
        creatorId: adminId
  })

    res.json({
        message: "signup endpoint"
    })


 
});

module.exports = {
    adminRouter: adminRouter
};
 
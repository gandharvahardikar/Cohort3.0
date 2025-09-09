const express = require("express");
const { createUserRoutes } = require("./routes/user");
const { createCourseRoutes } = require("./routes/course");
const app = express();

createUserRoutes(app);
createCourseRoutes(app); // calling the function to create user routes

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000);
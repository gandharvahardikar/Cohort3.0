const express = require("express");
const mongoose = require("mongoose");


const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);


async function main() {
    // use dot env for credentials
    await mongoose.connect("mongodb+srv://gandharvahardikar:mongo%40123@cluster0.8crovsj.mongodb.net/coursera-app")
    app.listen(3000);
    console.log("listening on port 3000");

}

main()

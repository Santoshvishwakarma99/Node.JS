const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./router/authRouter");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);
mongoose.connect("mongodb://127.0.0.1:27017/todoDB");

app.listen(5000, () => {
  console.log("Server running on 5000");
});

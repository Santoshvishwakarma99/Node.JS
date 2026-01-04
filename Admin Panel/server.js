const express = require("express")
const db = require('./config/db');
const router = require("./router/adminRouter")
const cookieParser = require('cookie-parser');
const app = express();

// const port = 7000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/admin',router)

app.listen(7000, () => {
    console.log("server is running succefully");
})
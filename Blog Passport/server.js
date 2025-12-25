const express = require("express");
const db = require("./config/db");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const LocalAuth = require("./Middleware/LocalAuth");

const authRoutes = require("./Routes/authRoutes");
const todoRoutes = require("./Routes/todoRoutes");

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

LocalAuth(passport);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", authRoutes);
app.use("/", todoRoutes);

app.get("/", (req, res) => res.redirect("/login"));

app.listen(8000, () => console.log("Server running on http://localhost:8000"));

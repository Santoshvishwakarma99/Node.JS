const express = require("express");
const multer = require("multer");
const { addMovie, editMovie, deleteMovie, getMovie } = require("../Controller/movieController");
const M_router = express.Router();


// multer setup
const upload = multer({ dest: "uploads/" }); // simple, uploads folder me save

M_router.post("/add", addMovie);
M_router.get("/all", getMovie);
M_router.patch("/:id", editMovie);
M_router.delete("/:id", deleteMovie);

module.exports = M_router;
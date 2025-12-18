const express = require("express");
const router = express.Router();

const {todoPage,addTodo,deleteTodo} = require("../Controller/todoController");

router.get("/todo", todoPage);
router.post("/todo/add", addTodo);
router.post("/todo/delete", deleteTodo);

module.exports = router;

const router = require("express").Router();
const auth = require("../Middleware/Auth");
const todo = require("../controller/todoController");

router.get("/todo", auth, todo.todoPage);
router.post("/todo/add", auth, todo.addTodo);
router.post("/todo/delete", auth, todo.deleteTodo);
router.get("/todo/edit", auth, todo.editTodo);
router.post("/todo/update", auth, todo.updateTodo);

module.exports = router;

const { todos } = require("../Model/userModel");

/* TODO PAGE */
exports.todoPage = (req, res) => {
    const username = req.username;

    res.render("todo", {
        username,
        list: todos[username] || [],
        editIndex: req.query.editIndex   // 👈 IMPORTANT
    });
};

/* ADD + EDIT TODO */
exports.addTodo = (req, res) => {
    const username = req.username;
    const { text, index } = req.body;

    if (!todos[username]) {
        todos[username] = [];
    }

    // EDIT MODE
    if (index !== "" && index !== undefined) {
        todos[username][index] = text;
    }
    // ADD MODE
    else {
        todos[username].push(text);
    }

    res.redirect("/todo");
};

/* DELETE TODO */
exports.deleteTodo = (req, res) => {
    const username = req.username;
    const index = req.body.index;

    if (todos[username]) {
        todos[username].splice(index, 1);
    }

    res.redirect("/todo");
};

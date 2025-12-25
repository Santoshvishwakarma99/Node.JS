exports.todoPage = (req, res) => {
  res.render("todo", {
    user: req.user,
    list: req.user.todos || [],
    editIndex: null
  });
};

exports.addTodo = async (req, res) => {
  req.user.todos.push(req.body.text);
  await req.user.save();
  res.redirect("/todo");
};

exports.deleteTodo = async (req, res) => {
  req.user.todos.splice(req.body.index, 1);
  await req.user.save();
  res.redirect("/todo");
};

exports.editTodo = async (req, res) => {
  const index = req.query.editIndex;
  res.render("todo", {
    user: req.user,
    list: req.user.todos || [],
    editIndex: index
  });
};


exports.updateTodo = async (req, res) => {
  const { text, index } = req.body;
  req.user.todos[index] = text; 
  await req.user.save();
  res.redirect("/todo");
};


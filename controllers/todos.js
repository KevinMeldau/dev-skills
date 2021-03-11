// require the Todo model
const Todo = require("../models/todo");

function index(req, res) {
  res.render("todos/index", {
    todos: Todo.getAll(),
  });
}

function show(req, res) {
  res.render("todos/show", {
    todo: Todo.getOne(req.params.id),
    todoNum: parseInt(req.params.id) + 1,
  });
}

module.exports = {
  index,
  show,
};

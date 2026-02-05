const { getAllTodos, getSigleTodo, createTodos, updateTodo, deleteTodos } = require("../controllers/todo.controller")

const todoRouter = require("express").Router()

todoRouter.get("/all", getAllTodos)
todoRouter.get("/single/:id", getSigleTodo)
todoRouter.post("/create", createTodos)
todoRouter.put("/update/:id", updateTodo)
todoRouter.delete("/delete/:id", deleteTodos)

module.exports = todoRouter
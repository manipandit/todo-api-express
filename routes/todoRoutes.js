const express = require("express");
const router = express.Router();

// import controllers
const { createTodo } = require("../controllers/createTodo");
const { getTodos } = require("../controllers/getTodo");
const { getTodoById } = require("../controllers/getTodo");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

// API routes
// CREATE -> API to create a todo in db
router.post("/createTodo", createTodo); // route->controller

// READ -> API to get all todos from db
router.get("/getTodos", getTodos);

// READ -> API to get specific todo by id from db
router.get("/getTodos/:id", getTodoById);

// UPDATE -> API to update todo by id
router.put("/updateTodo/:id", updateTodo);

// DELETE -> API to delete todo by id
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;

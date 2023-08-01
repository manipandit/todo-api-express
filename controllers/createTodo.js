// import the model
const Todo = require("../models/Todo");

// define route handlers
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const todo = await Todo.create({ title, description });

    res.status(201).json({
      success: true,
      data: todo,
      message: "Todo created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// module.exports = createTodo;

// import the model
const Todo = require("../models/Todo");

// define route handlers
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete({ _id: id });

    if (!todo) {
      res.status(404).json({
        success: false,
        message: "Todo with this id not found",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

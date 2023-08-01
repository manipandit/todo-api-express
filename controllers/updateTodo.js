// import the model
const Todo = require("../models/Todo");

// define route handlers
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        updatedAt: Date.now(),
      }
    );

    if (!todo) {
      res.status(404).json({
        success: false,
        message: "Todo with this id not found",
      });
    }

    const updatedTodo = await Todo.findById(id);

    res.status(200).json({
      success: true,
      data: updatedTodo,
      message: "Todo updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

router
  .route("/")
  .get(taskController.getAllTask)
  .post(taskController.createTask);

router
  .route("/:id")
  .get(taskController.getTask)
  .delete(taskController.deleteTask)
  .put(taskController.updateTask);

// router.get("/data/:id", getTask);
// router.get("/", getAllTask);
// router.post("/", createTask);
module.exports = router;

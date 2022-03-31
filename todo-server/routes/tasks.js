const Task = require("../models/task");
const express = require("express");
const router = express.Router();

const db = require("../db");

router.post("/", async (req, res) => {
  // try {
  //   const task = await new Task(req.body).save();
  //   res.send(task);
  // } catch (error) {
  //   res.send(error);
  // }

  const task = { ...req.body, completed: 0 };
  const sql = "INSERT INTO todos SET ?";

  db.query(sql, task, (err) => {
    if (err) throw err;

    res.send(task);
  });
});

router.get("/", async (req, res) => {
  // try {
  //   const tasks = await Task.find();
  //   res.send(tasks);
  // } catch (error) {
  //   res.send(error);
  // }

  const sql = "SELECT * FROM todos";

  db.query(sql, (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

router.put("/:id", async (req, res) => {
  // try {
  //   const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
  //   res.send(task);
  // } catch (error) {
  //   res.send(error);
  // }

  const taskId = req.params.id;
  const taskComp = req.body.completed;
  const sql = `UPDATE todos SET completed = ${taskComp} WHERE _id = ${taskId}`;

  db.query(sql, (err) => {
    if (err) throw err;

    res.end();
  });
});

router.delete("/:id", async (req, res) => {
  // try {
  //   const task = await Task.findByIdAndDelete(req.params.id);
  //   res.send(task);
  // } catch (error) {
  //   res.send(error);
  // }

  const taskId = req.params.id;
  const sql = `DELETE FROM todos WHERE _id = ${taskId}`;

  db.query(sql, (err) => {
    if (err) throw err;

    res.end();
  });
});

module.exports = router;

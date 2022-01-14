
const express = require('express');
const router = express.Router();
const db = require("../config/database");
const Todo = require("../models/Todo");

router.get("/",(req,res)=>{
    res.render("addTodo.ejs");
});
//add todo post route
router.post("/saveTodo",(req,res)=>{

    let name = req.body.todo_name;
    let desc = req.body.todo_desc;
    let title = req.body.todo_title;
    let todo_state = "P";
    Todo.create({
      todo_name: name, 
      todo_title: title,
      todo_desc: desc,
      todo_state:todo_state}
      )
      .then((resULT)=>{
          res.redirect("/");
      })
  })
module.exports = router;
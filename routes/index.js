const express = require('express');
const router = express.Router();
const db = require("../config/database");
const Todo = require("../models/Todo");

router.get('/',(req,res)=>{
    Todo.findAll().then( todos =>{
        console.log("size is: ");
            res.render("index",{
              title : "Pending Todos",
              mtodos :todos,
            });
           // return knex.insert({user_id: rows[0].id, name: 'Test'}, 'id').into('accounts');
          })
          .catch(function(error) { 
            console.error(error);
    });
});
//edit todo state
router.post("/edit/:todo_id",(req,res)=>{

    let state = req.body.state;
    if(state == "C"){
      state = "P";
    }else{
      state = "C";
    }
    Todo.update({ todo_state: state }, {
        where: {
            todo_id: req.params.todo_id
        }
      })
      .then(resp=>{
        res.redirect("/");
      });
})

        // Todo.findAll
        //     .then(todos=>{
        //         console.log(todos);
        //         res.send(todos);
        //     }).catch(err => console.log(err)));
module.exports = router;
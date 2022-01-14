
const { resolveInclude } = require('ejs');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

app.set("view engine","ejs")

//enable form post variables : a config change
app.use(express.urlencoded({extended:true}));


//db config info 

  const db = require("./config/database");

  //show all todos
  app.use('/',require('./routes/index'));
  //add new todo 
  app.use('/addTodo',require('./routes/addTodo'));

app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running at port "+port);
});



////    knexx >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //setting connection
// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//       host : '127.0.0.1',
//       port : 9398,
//       user : 'postgres',
//       password : '9398',
//       database : 'todo_app_db'
//     }
//   });

  //show all todos

// app.get("/",(req,res)=>{
//   knex.select('*')
//   .from('Todos')
//   .orderBy('todo_id', 'asc')
//   .then(function(todos) {
//     console.log("size is: ");
//     res.render("index",{
//       title : "Pending Todos",
//       mtodos :todos,
//     });
//    // return knex.insert({user_id: rows[0].id, name: 'Test'}, 'id').into('accounts');
//   })
//   .catch(function(error) { 
//     console.error(error);
//    });
  
// });


// //edit todo state

// app.post("/edit/:todo_id",(req,res)=>{

//     let state = req.body.state;
//     if(state == "C"){
//       state = "P";
//     }else{
//       state = "C";
//     }
//     knex.select()
//     .from("Todos")
//     .where("todo_id",req.params.todo_id)
//     .update({
//       todo_state: state
//     })
//     .then(resp=>{
//       res.redirect("/");
//     })
// })

// //add todo post route
// app.post("/saveTodo",(req,res)=>{

//   let name = req.body.todo_name;
//   let desc = req.body.todo_desc;
//   let title = req.body.todo_title;
//   let todo_state = "P";
//   //knex.insert({user_id: rows[0].id, name: 'Test'}, 'id').into('accounts');
//   knex("Todos")
//     .insert({todo_name: name, todo_title: title, todo_desc: desc, todo_state:todo_state})
//     .then((resULT)=>{
//       res.redirect("/");
//     })

// })

// app.get("/addTodo",(req,res)=>{

//     res.render("addTodo.ejs");
//    // return knex.insert({user_id: rows[0].id, name: 'Test'}, 'id').into('accounts');

// });

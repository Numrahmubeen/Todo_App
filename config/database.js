const Sequelize = require('sequelize');
// module.exports = new Sequelize("postgres://postgres:9398@todo_app_db:9398/Todos");
// module.exports = new Sequelize('postgres://postgres:9398/todo_app_db');

// Option 3: Passing parameters separately (other dialects)
module.exports = new Sequelize('todo_app_db', 'postgres', '9398', {
    host: 'localhost',
    dialect: 'postgres',
    port: '9398'
  });

// // Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//   });
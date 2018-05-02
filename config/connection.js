//bring in mysql
var mysql = require("mysql");

if (process.env.JAWSDB-URL) {
  connection.mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hacktheplanet',
    database: 'todoagain_db'
  });
};

// //connect to localhost
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "",
//   database: "burgers_db"
// });

connection.connect(function (err) {
  if (err) throw err;
  // console.log("Connected as id " + connection.threadId);
  callFunction();
});

// Export connection for our ORM to use.
module.exports = connection;
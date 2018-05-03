//bring in mysql
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection.mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'tyduzbv3ggpf15sx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'ss60byquyf9cold1',
    password: 'htbsoo1e51mqxlnv',
    database: 'pcv2twmwrqjey9ks'
  });
};

//connect to localhost
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
});

// Export connection for our ORM to use.
module.exports = connection;
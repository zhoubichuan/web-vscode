const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: "3306",
  database: "test"
});
connection.connect();
let userDeleteSql = "DELETE FROM userinfo";
connection.query(userDeleteSql, function(err, result) {
  if(!err){
    console.log("删除成功");
  }
});
connection.end();

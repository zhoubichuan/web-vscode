const mysql = require("mysql");
const connection = mysql.createConnection({
  localhost: "localhost",
  user: "root",
  password: "root",
  port: "3306",
  database: "test"
});
connection.connect();

let updateSql = "update userinfo set UserName = ?,UserPass = ? where id = ?";
let sqlValue = ["123sdsadf", "12344", 1];
connection.query(updateSql, sqlValue, function(err, res) {
  if(err){
    console.log('更新失败',err.message);
    throw err
  }else{
    console.log('更新成功');
  }
});

connection.end();

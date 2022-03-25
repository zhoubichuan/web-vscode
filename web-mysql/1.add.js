const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ZBCzbc123",
  database: "test"
});
connection.connect(err=> {
  if(err) throw err
  console.log('连接成功...')
});
let userAddSql = "INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,?,?)";
let userAddSql_params = ["我的名字", "123"];
connection.query(userAddSql, userAddSql_params, function(err, result) {
  console.log("增", JSON.stringify(result));
});
connection.end();

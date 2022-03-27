const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test"
});
connection.connect(err=> {
  if(err) throw err
  console.log('连接成功...')
});
let createtable = `create table if not exists userinfo(
  id int(11) not null primary key auto_increment ,
  UserName varchar(50) not null,
  UserPass varchar(50) not null
)`
connection.query(createtable,function(err){
  if(!err){
    console.log('serinfo表')
  }
})
let insertsql = "insert into userinfo(UserName,UserPass) value?";
let value = [
  [Math.ceil(Math.random()*50),Math.ceil(Math.random()*1000)],
  [Math.ceil(Math.random()*50),Math.ceil(Math.random()*1000)],
  [Math.ceil(Math.random()*50),Math.ceil(Math.random()*1000)],
  [Math.ceil(Math.random()*50),Math.ceil(Math.random()*1000)]
];
connection.query(insertsql, [value], (err, res, fields) =>{
  if(err){
    console.log("添加失败",err.message);
    throw err
  }
  connection.destroy()
  console.log('添加成功')
});

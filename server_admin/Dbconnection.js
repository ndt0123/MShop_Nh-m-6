var mysql = require('mysql');
var connection=mysql.createPool({
 
 host:'localhost',
 user:'root',
 password:'',
 database:'database_mshop'
 
});
module.exports=connection;
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database_mshop",
    multipleStatements: true
});

module.exports.con = con;
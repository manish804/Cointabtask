const mysql = require('mysql');

const connection = mysql.createConnection({
	host : 'localhost',
	database : 'user_login',
	user : 'root',
	password : 'password',
	port:3306
});

connection.connect(function(error){
	if(error)
	{
		console.log("throw, error",error);
		return 
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});
var sql ='INSERT INTO user_login(user_id,user_email,user_password,user_session_id) VALUES(12,"abc","123","12")';
connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
module.exports = connection;

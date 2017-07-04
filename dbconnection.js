var mysql=require('mysql');
 var connection=mysql.createPool({

//command get password mysql:
//sudo grep 'temporary password' /var/log/mysqld.log
host:'localhost',
 user:'root',
 password:'Si<_iO)q8ekj',
 database:'app'

});
 module.exports=connection;

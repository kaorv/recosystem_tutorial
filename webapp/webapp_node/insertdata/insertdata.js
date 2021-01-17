const mysql = require('mysql');

var mysql_setting = {
    host     : 'mysql',
    user     : 'reco',
    password : 'passwords',
    database : 'webapp'
};

var connection = mysql.createConnection(mysql_setting);

connection.query('create table webapp.purchasehistory (id int auto_increment not null primary key,item varchar(50),buydate timestamp not null default current_timestamp);',function (err, result) {
  if (err) throw err; 
  console.log('database created');
});

connection.query('create table webapp.itemdetails(id int auto_increment not null primary key,item varchar(50) not null ,venderaddress int not null);',function (err, result) {
    if (err) throw err; 
    console.log('database created');
  });


const item1 = { item: 'A', venderaddress: '29'};
connection.query('INSERT INTO itemdetails SET ?', item1, (err, res) => {
  if(err) throw err;
  console.log('created!');
});

const item2 = { item: 'B', venderaddress: '30'};
connection.query('INSERT INTO itemdetails SET ?', item2, (err, res) => {
  if(err) throw err;
  console.log('created!');
});

connection.end();
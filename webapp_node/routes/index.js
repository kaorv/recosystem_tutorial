const router = require("express").Router();

var mysql = require('mysql');
var mysql_setting = {
  host     : 'localhost',
  user     : 'root',
  password : 'passwords',
  database : 'webapp'
};
var connection = mysql.createConnection(mysql_setting);

router.get("/top",(req,res)=>{
	res.render("./top.ejs");
});

router.get("/purchase",(req,res)=>{

  connection.query('SELECT * from itemdetails', (err, itemdetail) => {
    if (err) throw err;
    res.render("./purchase.ejs",{ itemdetail: itemdetail });
  });

});

router.get("/output",(req,res)=>{
  let item = req.query.item;
	console.log("output item-----------------------------");
	console.log(item);
  console.log("----------------------------------------");
  
  const additem = { item: item };
  connection.query('INSERT INTO purchasehistory SET ?', additem,(err) => {
    if (err) throw err;
  	console.log('itemをtableに追加しました。');
  });

	res.render("./top.ejs");
});

module.exports = router;

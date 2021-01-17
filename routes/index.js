const router = require("express").Router();

router.get("/top",(req,res)=>{
	res.render("./top.ejs");
});

router.get("/purchase",(req,res)=>{
	res.render("./purchase.ejs");
});

router.get("/output",(req,res)=>{
  let item = req.query.item;
	console.log("output item-----------------------------");
	console.log(item);
	console.log("----------------------------------------");
	res.render("./top.ejs");
});

module.exports = router;

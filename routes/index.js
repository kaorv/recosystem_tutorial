let router = require("express").Router();

router.get("/top",(req,res)=>{
	res.render("./top.ejs");
});

router.get("/purchase",(req,res)=>{
	res.render("./purchase.ejs");
});

module.exports = router;
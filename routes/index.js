var router = require('express').Router(),
	path = require('path');

router.get("/",function(req,res){
	res.sendFile(path.resolve(__dirname+"/../views/index.html"));
});

module.exports = router;

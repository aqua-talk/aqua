var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/google', function(req, res, next) {
  if(req.body.token=="a")
  res.json({islogin:true})
});

module.exports = router;

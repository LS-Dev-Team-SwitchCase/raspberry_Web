var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  stat = true;
  res.render('index', { title: '스마트 약통 배급기' ,status : stat});
});

module.exports = router;

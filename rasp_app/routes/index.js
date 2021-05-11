var express = require('express');
var router = express.Router();

var stat = false;

router.get('/', function(req, res, next) {
  stat = false;
  res.status(200).json("Default");
});

router.get('/setTrue', function(req, res, next) {
  stat = true;
  setTimer();
  res.status(200).json("Set to " + stat + ", Timer set 3000ms");
});

router.get('/curStat', function(req, res, next) {
  res.status(200).json(stat);
});

async function setTimer(){
  await sleep(3000);
  stat = false;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

module.exports = router;

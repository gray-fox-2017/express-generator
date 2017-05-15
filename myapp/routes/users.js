var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get(/.*man$/, function(req, res, next) {
  res.send('Is a Hero');
});

module.exports = router;

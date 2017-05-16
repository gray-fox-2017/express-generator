var express = require('express');
var router = express.Router();
var helper = require('../helpers/helper');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });s
});

router.post('/', function(req, res, next) {
  
  let input  = req.body.input;
  if (input) {
    if (helper.isNumber(input)) {
      res.render('index',{title: 'is a number'});
    }else {
      res.render('index', {title:' not number'});
    }
  }else {
    res.render('index',{title:'please input your word'})
  }
});

module.exports = router;

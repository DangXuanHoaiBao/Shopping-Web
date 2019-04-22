var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all', function(req, res,next){
  res.render('all', { title: 'Express' });
});

router.get('/login', function(req, res,next){
  res.render('login', { title: 'Express' });
});

router.get('/forgotPassword', function(req, res,next){
  res.render('Repass', { title: 'Express' });
});

router.get('/account', function(req, res,next){
  res.render('account', { title: 'Express' });
});
module.exports = router;

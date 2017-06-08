var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET index.jade  page */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'My app' });
  var files = fs.readdirSync('public/images/pic'); //我的图片存放路径
    console.log(files[0]);
   res.render('index', { title: '相册展示',imgs:files });
});

//我的图片 GET home.jade page
router.get('/home', function(req, res, next) {
   var files = fs.readdirSync('public/images/pic'); //图片存放路径    
   res.render('home', { title: 'Home',imgs:files });
});

//3D效果 GET 3dfocus.jade page
router.get('/focus', function(req, res, next) {
   var files = fs.readdirSync('public/images/focus'); //3D图片存放路径    
   res.render('3dfocus', { title: '3D效果',imgs:files });
});

module.exports = router;

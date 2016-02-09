var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 5' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
      myName: "Connor",
      title: "About"});
});

// make this file public within the rest of the application
module.exports = router;

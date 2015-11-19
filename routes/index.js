var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { // this is the get users route.
  res.render('index', { title: 'Express' });
});

module.exports = router;

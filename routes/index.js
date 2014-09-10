var express = require('express');
var router = express.Router();

/* GET home page. */
console.log('index');
router.get('/', function(req, res) {
    
  res.render('index', {
      title: 'Express',
      //bodyClass: 'bg-1'
  });
});

module.exports = router;

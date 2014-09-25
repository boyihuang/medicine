var express = require('express');
var router = express.Router();

console.log('medicine');
router.post('/', function(req, res) {
    
  res.render('medicine', {
      //username: '#{username}' ,
      //useremail:'#{useremail}' ,
      bodyClass: 'bg-1'
  });
});

module.exports = router;

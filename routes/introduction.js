var express = require('express');                                           
var router = express.Router();
router.post('/', function(req,res){
  content = '' + 
    '<h1><b> Welcome </b></h1>'; 
  res.send(content);
});

module.exports = router ;

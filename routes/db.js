var express = require('express');                                                                                   
var router = express.Router();

var mongo = require('mongodb'); 
var monk = require('monk');
var db_name = 'MedicineDB';
var db = monk('localhost:27017/' + db_name);
var collection = db.get('record_collection');


console.log('db');

module.exports = router;

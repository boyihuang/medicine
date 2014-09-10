var express = require('express');                                           
var router = express.Router();

var mongo = require('mongodb');                                             
var monk = require('monk');
var db_name = 'MedicineDB';
var db = monk('localhost:27017/' + db_name);
var collection = db.get('medicine_collection');

router.post('/', function(req, res) { 
    var login_username = req.body.login_username;       
    console.log(login_username);       
    var login_password = req.body.login_password;
    console.log(login_password);
    var signup_username = req.body.signup_username;
    console.log(signup_username);
    var signup_password = req.body.signup_password;
    console.log(signup_password);
    var signup_email = req.body.signup_email;
    console.log(signup_email);
    
    if (login_username && login_password) {
      collection.find({ user_name: login_username , user_password: login_password}, function(err, data) {
        if(data.length > 0 && data){
          console.log(data.length);  
          console.log(data);  
          console.log('Successfully Login');
          console.log(data[0].user_name);
          console.log(data[0].user_email);
          res.render('medicine',{ username: data[0].user_name , useremail : data[0].user_email});
        }
        else{
          console.log('Input Error');
          res.redirect('/'); 
        }

      });  
    }
    else if (signup_username && signup_password && signup_email && signup_realname && signup_company && signup_country && signup_website){
      collection.find({ user_name: signup_username }, function(err, data) {
        if(data.length>0 && data){
          console.log('Input Error');
          res.redirect('/');  
        }    
        else{
          console.log('Name: ' + data[0].user_name + ', email: ' + data[0].user_email);
          collection.insert({   
              user_name: signup_username,
              user_password: signup_password,
              user_email: signup_email,
              user_realname: signup_realname,
              user_company: signup_company,
              user_country: signup_country,
              user_website: signup_website
            },function(err, data) {
              if (data) {                 
                console.log('Successfully Insert');
              } else {
                console.log('Failed to Insert');
              }
          });
          res.render('medicine',{ username: signup_username , useremail : signup_email});
        } 
      });    
    }
    else{
      console.log('Input Error');
        res.redirect('/');      
    } 
});

module.exports = router ;

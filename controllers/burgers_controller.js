var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');

// Initial base route setup
// Index page will be rendered on '/' (I.E. the default page)
router.get('/', function(req,res){
  burger.selectAll(function(burger_data){
    console.log(burger_data);
    res.render('index', {burger_data});
  });
});

// When we click the devour it button, the corresponding burger item should disappear
router.put('/burgers/updateSetWhere', function(req,res){
  burger.updateSetWhere(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});

// When we add a new burger, this will insert the inputted burger name into the db and redirect to the default page (which is our index page).
router.post('/burgers/insertIntoValues', function(req,res){
  burger.insertIntoValues(req.body.burger_name, function(result){
    console.log(result);
    res.redirect('/');
  });
});

// This is the object that is actually returned as the result of a require call.
module.exports = router;

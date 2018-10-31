// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    console.log("burger model gets all")
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertIntoValues: function(name,cb){
    orm.insertIntoValues('burgers',name,cb);
  },
  updateSetWhere: function(id,cb){
    orm.updateSetWhere('burgers',id,cb);
  },
};


// Export the database functions for the controller (catsController.js).
module.exports = burger;

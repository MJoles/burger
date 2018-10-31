// Requiring the orm.js file
var orm = require('../config/orm.js');

// Calling orm.selectAll, inserting burgers as our tableData input, and running the function of response as our callback that will be sent into our burgers_controller.js file
// "cb" is shorthand for callback
var burger = {
  selectAll: function(cb){
    orm.selectAll('burgers',function(res){
      cb(res);
    });
  },
  // Calling orm.updateSetWhere, inserting burgers as our tableData input, and running the function of response as our callback that will be sent into our burgers_controller.js file - updating the devour info
  // "cb" is shorthand for callback
  updateSetWhere: function(id,cb){
    orm.updateSetWhere('burgers',id,cb);
  },
    // Calling orm.updateSetWhere, inserting burgers as our tableData input, and running the function of response as our callback that will be sent into our burgers_controller.js file - creating new burger
  // "cb" is shorthand for callback
  insertIntoValues: function(name,cb){
    orm.insertIntoValues('burgers',name,cb);
  }
};

// This is the object that is actually returned as the result of a require call.
module.exports = burger;

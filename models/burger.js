// import orm.js 
const orm = require("../config/orm.js");

// call orm functions
const burger = {
  all: function() {
    return orm.all('burgers');
  },
  create: function(cols, vals) {
    return orm.create('burgers', cols, vals);
  },
  update: function(objColVals, condition) {
    return orm.update('burgers', objColVals, condition);
  },
  delete: function(condition) {
    return orm.delete('burgers', condition);
  }
};

// export burger.js File
module.exports = burger;


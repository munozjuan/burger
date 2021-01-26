const orm = require("../config/orm.js");

const burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    insertOne: function (cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function (res) {
            callback(res);
        });
    },
    updateOne: function (objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            callback(res);
        });
    },
    delete: function(burgerID, callback){
        orm.delete("burgers",burgerID, function(res){
          callback(res);
        });
      }
};

module.exports = burger;
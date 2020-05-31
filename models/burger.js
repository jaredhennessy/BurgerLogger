var orm = require("../config/orm");

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (burger_name, cb) {
        orm.insertOne("burgers", burger_name, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, cb) {
        orm.update("burgers", id, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
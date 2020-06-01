var orm = require("../config/orm");

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (name, cb) {
        orm.insertOne("burgers", "burger_name", name, function (res) {
            cb(res);
        });
    },
    update: function (id, cb) {
        orm.updateOne("burgers", "devoured", "true", id, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;
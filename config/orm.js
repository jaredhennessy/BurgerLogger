var connection = require("./connection");

var orm = {
    selectAll: function (tblR, cb) {
        var queryString = "SELECT * FROM ??";
        console.log(queryString);

        connection.query(queryString, [tblR], function (err, res) {
            if (err) {
                return res.status(500).end();
            } else {
                console.log(res);
                cb(res);
            }
        });
    },
    insertOne: function (tblC, col, val, cb) {
        var queryString = "INSERT INTO ?? (`" + col + "`) VALUES ('" + val + "')";

        console.log(queryString);

        connection.query(queryString, [tblC], function (err, res) {
            if (err) {
                throw err;
            }

            console.log({
                id: res.insertId
            });
            cb(res);
        });
    },
    updateOne: function (tblU, colU, colVal, id, cb) {
        var queryString = "UPDATE ?? SET `" + colU + "` = " + colVal + " WHERE `id` = " + id + "";

        console.log(queryString);

        connection.query(queryString, [tblU], function (
            err,
            res
        ) {
            if (err) {
                throw err;
            }
            console.log({
                id: id
            });
            cb(res);
        });
    }
};

module.exports = orm;
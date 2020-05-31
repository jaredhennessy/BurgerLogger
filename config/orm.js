var connection = require("./connection");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//   * `selectAll()`
//   * `insertOne()`
//   * `updateOne()`

var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ??";
        console.log(queryString);

        connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                return res.status(500).end();
            } else
                console.log(result);
            res.render("index", {
                burgers: result
            });
        });
    },
    insertOne: function (tableInput, burgerName) {
        var queryString = "INSERT INTO ?? (burger_name) VALUES (??)";

        console.log(queryString);

        connection.query(queryString, [tableInput, burgerName], function (err, result) {
            if (err) {
                return res.status(500).end();
            }

            res.json({
                id: result.insertId
            });
            console.log({
                id: result.insertId
            });
        });
    },
    updateOne: function (tableUpdate, burgerId) {
        var queryString = "UPDATE ?? SET devoured = true WHERE id = ??";

        console.log(queryString);

        connection.query(queryString, [tableUpdate, burgerId], function (
            err,
            result
        ) {
            if (err) {
                return res.status(500).end();
            } else if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        });
    }
};

module.exports = orm;
const express = require('express');
var oracledb = require('oracledb');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('api works');
});

var platillos;

router.get('/platillos', (req, res) => {

    oracledb.getConnection({
        user: "osbaldo",
        password: "admin",
        connectString: "localhost/orcl"
    }, function (err, connection) {
        if (err) {
            console.error(err.message);
            return;
        }
        connection.execute("SELECT * from platillo WHERE id < 15",
            [],
            function (err, result) {
                if (err) {
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                console.log(result.metaData);
                console.log(result.rows);

                platillos = result.rows;
                doRelease(connection);
            });
    });

    function doRelease(connection) {
        connection.release(
            function (err) {
                if (err) { console.error(err.message); }
            }
        );
    }
    res.send(platillos);
});

module.exports = router;
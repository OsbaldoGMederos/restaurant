const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');


const api = require('./server/routes/api');
const platillos_api = require('./server/routes/platillos_api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);
app.use('/platillos_api', platillos_api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);


const server = http.createServer(app);

// database platillos
// app.get('/platillos', function (req, res) {
//     handleDatabaseOperation(req, res, function (request, response, connection) {
//         var selectStatement = "SELECT * FROM platillos WHERE id < 3";
//         connection.execute(selectStatement, {
//             outFormat: oracledb.OBJECT
//         }, function (err, result) {
//             if (err) {
//                 console.log(err.message);
//                 response.writeHead(500, { 'Content-Type': 'application/json' });
//                 response.end(JSON.stringify({
//                     status: 500,
//                     message: "Error getting the platillos"
//                 }));
//             }
//             else {
//                 console.log('db respinse is ready');
//                 response.writeHead(200, { 'Content-Type': 'application/json' });
//                 response.end(JSON.stringify(result.rows));
//             }
//             doRelease(connection);
//         });
//     });
// });

// function doRelease(connection) {
//     connection.release(
//         function (err) {
//             if (err) {
//                 console.error(err.message);
//             }
//         });
// }

server.listen(port, () => console.log(`API corriendo en localhost:${port}`));
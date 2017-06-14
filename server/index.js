// REQUIRE DEPENDENCIES
// ============================================================
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const passport = require('passport');
const auth0 = require('passport-auth0');
const config = require('./config.js');

 // CONFIG
 // ============================================================

 // INITILIZE APP
 // ============================================================
 var app = module.exports = express();
 // INITILIZE DEPENDENCIES
 // ============================================================
 app.use(express.static(__dirname + './../dist'));
 app.use(bodyParser.json());
 // MASSIVE SETUP
 // ============================================================
 var massiveUri = config.MASSIVE_URI;
 var massiveServer = massive.connectSync({
   connectionString: massiveUri
 });
 app.set('db', massiveServer);
 var db = app.get('db');
 // CONTROLLERS
 // ============================================================
 var tableController = require('./controllers/tableController');
 //DB SETUP
//=============================================================
var dbSetup = require('./services/dbSetup');
dbSetup.run();
 // ENDPOINTS
 // ============================================================
 // TABLE ENDPOINTS
 app.get('/api/table', tableController.read);
 app.get('/api/table/find', tableController.findTable);
 app.post('/api/table',  tableController.create);
 app.put('/api/table/edit/:id', tableController.update);
 app.delete('/api/table/:id', tableController.delete);
 // LISTEN
 // ============================================================
 var port = config.PORT;
 app.listen(port, function() {
   console.log('listening on port ', port);
 });

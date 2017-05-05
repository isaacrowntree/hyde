const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bp = require('body-parser');

const config = require('./config');

const git = require('./lib/git');
const files = require('./lib/files');
const file = require('./lib/file');

const app = express();

// Logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Static assets
if (config.environment === 'production') {
	app.use(express.static(path.resolve(__dirname, '..', 'build')));

	// Always return the main index.html so that react-router renders the route in the client
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
	});
} else { // Dev CORS
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

// Node API

// Needs to run async from API call
new git().clone(config.repository);

app.get('/files', (req, res) => {
  files(config.repository, res);
});

app.post('/file', (req, res) => {
  if (req.body.file !== '') {
    console.log(req.body.file);
    file(req.body.file, res);
  }
});

module.exports = app;

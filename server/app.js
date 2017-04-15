const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bp = require('body-parser');

const writer = require('./lib/writer');

const app = express();

// Logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Static assets
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, '..', 'build')));

	// Always return the main index.html so that react-router renders the route in the client
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
	});
}

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

// Node API
app.post('/api', (req, res) => {
  new writer().writeFile('temp.md', req.body.key);
  return true;
});

module.exports = app;
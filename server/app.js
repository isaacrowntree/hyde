'use strict';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import bp from 'body-parser';

import { config } from './config';
import files from './lib/files';
import file from './lib/file';
import save from './lib/save';

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
app.get('/files', (req, res) => {
  files(config.repository, res);
});

app.post('/file', (req, res) => {
  file(req.body.file, res);
});

app.post('/save', (req, res) => {
  save(req.body.file, req.body.data, res);
});

export default app;

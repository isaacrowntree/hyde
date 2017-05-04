'use strict';
const config = require('./config');
const app = require('./app');

app.set('port', config.port);

app.listen(config.port, () => {
	console.log(`App listening on port ${config.port}!`); // eslint-disable-line no-console
});

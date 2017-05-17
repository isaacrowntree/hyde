'use strict';
import { config } from './config';
import app from './app';

app.set('port', config.port);

app.listen(config.port, () => {
	console.log(`App listening on port ${config.port}!`); // eslint-disable-line no-console
});

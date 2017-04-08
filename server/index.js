'use strict';

const app = require('./app');

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), () => {
	console.log(`App listening on port ${app.get('port')}!`); // eslint-disable-line no-console
});
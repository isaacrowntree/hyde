const express = require('express');
const bp = require('body-parser');
const writer = require('./lib/writer');

const app = express();

// app.set('port', (process.env.PORT || 3001));
app.set('port', 3001);

app.use(bp.json());
app.use(bp.urlencoded({
  extended: true
}));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.post('/save', (req, res) => {
  new writer().writeFile('temp.md', req.body.key);
  return true;
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

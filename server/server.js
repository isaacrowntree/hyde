const express = require('express');
const fs = require('fs')
const bp = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 3001));

app.use(bp.json());
app.use(bp.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.post('/save', (req, res) => {
  fs.writeFile("temp.md", req.body.key, function(err) {});
  return true;
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

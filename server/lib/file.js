const fs = require('fs');

const file = (file, res) => {
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) throw err;
    res.send(data);
  });
};

module.exports = file;
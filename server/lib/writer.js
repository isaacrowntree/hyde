const fs = require('fs');

class Writer {
  writeFile(filename, contents) {
    fs.writeFile(filename, contents, function(err) {});
  };
};

module.exports = Writer;

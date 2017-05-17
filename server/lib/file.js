'use strict';
import fs from 'fs';

const file = (file, res) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    res.send(data);
  });
};

export default file;

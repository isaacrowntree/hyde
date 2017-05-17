'use strict';
import fs from 'fs';

const save = (file, data, res) => {
  fs.writeFile(file, data, (err, data) => {
    if (err) throw err;
    res.send(true);
  });
};

export default save;

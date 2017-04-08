const expect = require("chai").expect;
const writer = require("./../lib/writer");
const fs = require('fs');

describe('Writer', () => {

  const testFile = 'temp.md';

  it('should write a temp file', () => {
    const content = 'test';

    new writer().writeFile(testFile, content);

    fs.open(testFile, 'r', (err, fd) => {
      if (err) {
        if (err.code === 'ENOENT') {
          console.error(`${testFile} does not exist`);
          return;
        }

        throw err;
      }

      expect(fd).to.eq(content);
    });
    fs.unlink(testFile);
  });
});

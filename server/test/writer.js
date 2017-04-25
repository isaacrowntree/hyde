const expect = require("chai").expect;
const writer = require("./../lib/writer");
const fs = require('fs');
const promisify = require("promisify-node");
const fse = promisify(require("fs-extra"));

describe('Writer', () => {

  const testFile = './tmp/temp.md';

  beforeEach(function() {
    return fse.remove(testFile).catch(function(err) {
      console.log(err);

      throw err;
    });
  });

  it('should write a temp file', () => {
    const content = 'test';

    new writer().writeFile(testFile, content);

    fs.open(testFile, 'r', (err, fd) => {
      expect(fd).to.eq(content);
    });
  });
});

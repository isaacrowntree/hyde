import sinon from 'sinon';
import fs from 'fs';
import file from './../lib/file';

describe('file', () => {

  let readFile,
      res = { send: function(arg) { this.sent = arg }};;

  beforeEach(() => {
    readFile = sinon.stub(fs, 'readFile');
  });

  it('resolves properly', () => {
    readFile.yields(false, true);
    file('file', res);
    expect(res.sent).toEqual(true);
  });

  it('fails properly', () => {
    readFile.yields(true, false);
    expect(() => { file('file', res) }).toThrow();
  });

  afterEach(() => {
    fs.readFile.restore();
  });
});

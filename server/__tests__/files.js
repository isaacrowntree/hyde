import sinon from 'sinon';
import fs from 'fs';
import dir from 'node-dir';
import files from './../lib/files';

describe('files', () => {

  let existsSync,
      res = { send: function(arg) { this.sent = arg }};

  beforeEach(() => {
    sinon.stub(dir, 'files').yields(false, true);
  });

  it('can get files if they exist', () => {
    existsSync = sinon.stub(fs, 'existsSync').returns(true);
    files('test', res);
    expect(res.sent).toEqual(true);
  });

  it('can get files if they don\'t exist', () => {
    existsSync = sinon.stub(fs, 'existsSync').returns(false);
    files('test', res);
    expect(res.sent).toEqual(true);
  });

  afterEach(() => {
    fs.existsSync.restore();
    dir.files.restore();
  });
});

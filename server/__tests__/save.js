import sinon from 'sinon';
import fs from 'fs';
import save from './../lib/save';

describe('save', () => {

  let writeFile,
      res = { send: function(arg) { this.sent = arg }};;

  beforeEach(() => {
    writeFile = sinon.stub(fs, 'writeFile');
  });

  it('resolves properly', () => {
    writeFile.yields(false, true);
    save('file', 'data', res);
    expect(res.sent).toEqual(true);
  });

  it('fails properly', () => {
    writeFile.yields(true, false);
    expect(() => save('file', 'data', res)).toThrow();
  });

  afterEach(() => {
    fs.writeFile.restore();
  });
});

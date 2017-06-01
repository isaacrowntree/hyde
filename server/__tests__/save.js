import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
import fs from 'fs';
import save from './../lib/save';

describe('save', () => {

  let writeFile,
      res = { send: function(arg) { this.sent = arg }},
      commitAndPush;

  beforeEach(() => {
    writeFile = sinon.stub(fs, 'writeFile');
    commitAndPush = sinon.stub().returnsPromise();
  });

  it('resolves properly', () => {
    writeFile.yields(false, true);
    commitAndPush.resolves(true);
    save('file', 'data', res, commitAndPush);
    expect(res.sent).toEqual(true);
  });

  it('fails properly for writeFile', () => {
    writeFile.yields(true, false);
    expect(() => save('file', 'data', res)).toThrow();
  });

  it('fails properly for commitAndPush', () => {
    writeFile.yields(true, false);
    commitAndPush.rejects(false);
    expect(() => save('file', 'data', res)).toThrow();
  });

  afterEach(() => {
    fs.writeFile.restore();
  });
});

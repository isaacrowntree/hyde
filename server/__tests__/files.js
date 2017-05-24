import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
import fs from 'fs';
import dir from 'node-dir';
import files from './../lib/files';

describe('files', () => {

  let res,
      existsSync,
      cloneRepository,
      pullRepository;

  beforeEach(() => {
    sinon.stub(dir, 'files').yields(false, true);
    res = { send: function(arg) { this.sent = arg }};
    existsSync = sinon.stub(fs, 'existsSync');
  });

  it('can get files if they exist', () => {
    pullRepository = sinon.stub().returnsPromise();
    pullRepository.resolves(true);

    existsSync.returns(true);

    expect(files('test', res, cloneRepository, pullRepository).resolved).toEqual(true);
    expect(res.sent).toEqual(true);
  });

  it('can get files if they don\'t exist', () => {
    cloneRepository = sinon.stub().returnsPromise();
    cloneRepository.resolves(true);

    existsSync.returns(false);

    expect(files('test', res, cloneRepository, pullRepository).resolved).toEqual(true);
    expect(res.sent).toEqual(true);
  });

  afterEach(() => {
    dir.files.restore();
    fs.existsSync.restore();
  });
});

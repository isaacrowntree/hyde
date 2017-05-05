const sinon = require("sinon");
var sinonStubPromise = require('sinon-stub-promise');
sinonStubPromise(sinon);

const git = require("./../lib/git");

describe('Git', () => {
  let exec,
      url,
      success,
      failure,
      sandbox;

  beforeEach(function() {
    exec = sinon.stub().returnsPromise();
    url = 'http://github.com/isaacrowntree/hyde';
    success = {stdout: true, stderr: false};
    failure = false;
  });

  describe('when cloning', () => {

    it('can resolve', () => {
      var resolved = true;
      exec.resolves(success);
      expect(new git(exec).clone(url, resolved).resolveValue).toEqual(success);
    });

    it('cannot resolve', () => {
      exec.rejects(failure);
      expect(new git(exec).clone(url).rejected).toEqual(failure);
    });
  });
});

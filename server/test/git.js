const sinon = require("sinon");
const sinonChai = require('sinon-chai');
const chai = require('chai').use(sinonChai);
const expect = chai.expect;
var sinonStubPromise = require('sinon-stub-promise');
sinonStubPromise(sinon);

const git = require("./../lib/git");

describe('Git', () => {
  let exec,
      url,
      success,
      failure;

  beforeEach(function() {
    exec = sinon.stub().returnsPromise();
    url = 'http://github.com/isaacrowntree/hyde/';
    success = {stdout: true, stderr: false};
    failure = false;
  });


  describe('when cloning', () => {
    it('can resolve', () => {
      exec.resolves(success);
      expect(new git(exec).clone(url).resolveValue).to.eql(success);
    });

    it('cannot resolve', () => {
      exec.rejects(failure);
      expect(new git(exec).clone(url).rejected).to.eql(failure);
    });
  });
});

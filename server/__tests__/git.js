import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
import child_process_promise from 'child-process-promise';

import git from './../lib/git';

describe('Git', () => {

  let exec;

  beforeEach(() => {
    exec = sinon.stub(child_process_promise, 'exec').returnsPromise();
  });

  describe('clone', () => {
    it('can successfuly clone', () => {
      exec.resolves(true);
      expect(new git().clone('sample repository', 'hyde').resolved).toEqual(true);
    });

    it('ran across an error', () => {
      exec.rejects(true);
      expect(new git().clone('sample repository', 'hyde').rejected).toEqual(true);
    });
  });

  describe('pull', () => {
    it('can successfuly pull', () => {
      exec.resolves(true);
      expect(new git().pull('sample repository', 'hyde').resolved).toEqual(true);
    });

    it('ran across an error', () => {
      exec.rejects(true);
      expect(new git().pull('sample repository', 'hyde').rejected).toEqual(true);
    });
  });

  describe('commitAndPush', () => {
    it('can successfuly commitAndPush', () => {
      exec.resolves(true);
      expect(new git().commitAndPush('sample repository', 'hyde').resolved).toEqual(true);
    });

    it('ran across an error', () => {
      exec.rejects(true);
      expect(new git().commitAndPush('sample repository', 'hyde').rejected).toEqual(true);
    });
  });

  afterEach(() => {
    child_process_promise.exec.restore();
  });
});

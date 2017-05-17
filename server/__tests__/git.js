import sinon from 'sinon';
import child_process from 'child_process';

import git from './../lib/git';

describe('Git', () => {

  let exec, res;

  beforeEach(() => {
    exec = sinon.stub(child_process, 'exec');
    res = sinon.stub();
  });

  describe('clone', () => {
    it('can successfuly clone', () => {
      exec.yields(false, true, true);
      new git(res).clone('sample repository', 'hyde');
      expect(res.called).toEqual(true);
    });

    it('ran across an error', () => {
      exec.yields('false', true, true);
      new git(res).clone('sample repository', 'hyde');
      expect(res.called).toEqual(false);
    });
  });

  afterEach(() => {
    child_process.exec.restore();
  });
});

const expect = require("chai").expect;
const git = require("./../lib/git");
const NodeGit = require("nodegit");
const Repository = NodeGit.Repository;
const promisify = require("promisify-node");
const fse = promisify(require("fs-extra"));

describe('Git', () => {

  beforeEach(function() {
    return fse.remove('tmp').catch(function(err) {
      console.log(err);

      throw err;
    });
  });

  it('should clone a repository', () => {

    new git().clone().then(function(repository) {
      expect(repository).to.be.an.instanceof(Repository);
    });
  });
});

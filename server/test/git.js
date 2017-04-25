const expect = require("chai").expect;
const git = require("./../lib/git");
const promisify = require("promisify-node");
const fse = promisify(require("fs-extra"));

describe('Git', () => {

  beforeEach(function() {
    return fse.remove('./tmp/suzannahrowntree.site.git').catch(function(err) {
      console.log(err);

      throw err;
    });
  });

  it('should clone a repository', () => {
    new git().clone();
    expect().to.eq();
  });
});

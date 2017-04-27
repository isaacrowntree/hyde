const expect = require("chai").expect;
const git = require("./../lib/git");

describe('Git', () => {

  // beforeEach(function() {
  //   return fse.remove('./tmp/suzannahrowntree.site.git').catch(function(err) {
  //     console.log(err);

  //     throw err;
  //   });
  // });

  it('should clone a repository', () => {
    expect(new git('https://github.com/suzannahrowntree/suzannahrowntree.site.git').clone()).to.eq(1);
  });
});

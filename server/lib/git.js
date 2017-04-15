const NodeGit = require("nodegit");

class Git {

  clone() {
    const url = "https://github.com/suzannahrowntree/suzannahrowntree.site.git";
    const path = 'tmp';
    
    return NodeGit.Clone(url, path);
  }
}

module.exports = Git;
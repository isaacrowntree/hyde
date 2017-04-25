const exec = require('child_process').exec;

const url = process.env.GIT || 'https://github.com/suzannahrowntree/suzannahrowntree.site.git';

const path = './tmp/' + url.split(/\//).pop(-1);

class Git {
  clone() {
    const gitClone = 'git clone ' + url + ' ' + path;
    exec(gitClone, function(err, stdout, stderr) {
      if (err) throw err;
      else console.log(stdout);
    });
  }
}

module.exports = Git;

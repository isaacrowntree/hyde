const _exec = require('child-process-promise').exec;

const _commands = {
  clone: 'git clone'
};

/*
	I think this is in the wrong spot. the promise should be tied to state:
	http://mediatemple.net/blog/tips/loading-and-using-external-data-in-react/
	
	Upon load the git clone command should end in a 'finished' state
	and the interface show the result.
 */
class Git {
  constructor(exec = _exec) {
    this.exec = exec;
  }

  clone(url) {
    this.exec(`${_commands.clone} ${url} ${this._path(url)}`)
      .then(function(result) {
      	console.log(result.stdout, result.stderr);
      })
      .catch(function (err) {
        console.error('ERROR: ', err);
      });
  }

  _path(url) {
    return `./tmp/${url.split(/\//).pop(-1)}`;
  }
}

module.exports = Git;

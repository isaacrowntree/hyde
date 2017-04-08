        //Previous calls

        }).then(function() {
            return repo.getRemote("origin"); //Get origin remote
        }).then(function(remote) {
            return remote.push(["refs/heads/master:refs/heads/master"], {
                callbacks: {
                    credentials: function(url, userName) {
                        console.log("Requesting creds");

                        return NodeGit.Cred.userpassPlaintextNew(process.env.git_username, process.env.git_password);
                    }
                }
            });
        }).then(function(err) {
            console.log("Push error number:");
            console.log(err);
        }).catch(function(err) {
            console.log(err);
        }).done(function(commitId) {
            console.log("All done");
        })
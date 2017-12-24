var CryptoJS = require("crypto-js");
var minimist = require("minimist");

var args = minimist(process.argv.slice(2), {
    alias: {
        p: 'password',
        s: 'salt'
    }
});

// Encrypt
var ciphertext = CryptoJS.AES.encrypt(args.password, args.salt);
console.log('encrypted password:', ciphertext.toString());
console.log('with salt:', args.salt);

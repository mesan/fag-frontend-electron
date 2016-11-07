'use strict';

let exec = require('exec');

let doShit = function () {
  if (process.platform === 'win32') {
    exec(['bash.exe', __dirname + '\\js\\test.sh'],
      function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
      });
  } else {
    console.log("This awesome feature only available with Windows. Sorry. Not sorry.");
  }
};

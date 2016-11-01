var exec = require('exec');

doShit = function() {
    if (process.platform === 'win32') {
        exec([ 'bash.exe', 'C:/fag/fag-frontend-electron/app/js/test.sh' ],
             function(error, stdout, stderr) {
                 console.log('stdout: ' + stdout);
                 console.log('stderr: ' + stderr);
                 if (error !== null) {
                     console.log('exec error: ' + error);
                 }
             });
    } else {
        console.log("This awesome feature only available with Windows. Sorry. Not sorry.")
    }
};

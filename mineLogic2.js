// mineLogic.js

const { fork } = require('child_process');
const mineLogic_browser = require('./browser_instance');

const mineLogic = async (res, uname, pswd, time, hostUrl) => {
  try {
    const childProcess = fork('./browser_instance.js', [uname, pswd, time, hostUrl]);

    childProcess.on('exit', (code, signal) => {
      console.log(`Browser instance exited with code ${code} and signal ${signal}`);
      // Optionally, handle the exit event (e.g., restart the process)
    });
  } catch (error) {
    console.error('An error occurred while starting browser instance:', error);
    // Optionally, handle the error gracefully
  }
};

module.exports = { mineLogic };

/* eslint-disable */
const { connect } = require('./client');

console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = function (data) {
  if (data === 'c') {
    process.exit();
  }
}
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)

  return stdin;
}
setupInput();

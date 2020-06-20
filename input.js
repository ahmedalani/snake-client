/* eslint-disable func-names, no-fallthrough, no-console */
let connection;
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = function (data) {
  switch (data) {
    case 'c':
      process.exit();
    case 'w':
      connection.write('Move: up');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case 'l':
      connection.write('Say: go long!');
    default:
      console.log('press a, w, s, d to move or c to exit!');
      break;
  }
};

const setupInput = function (conn) {
  connection = conn;
  const { stdin } = process;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = { setupInput };

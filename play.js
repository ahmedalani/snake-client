/* eslint-disable func-names, no-console */
const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // print data from server to console
  conn.on('data', (data) => {
    console.log('Server Says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

console.log('Connecting ...');
connect();
/* eslint-disable func-names, no-console */
const net = require('net');
const { host, port, userName } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host,
    port
  });
  // print data from server to console
  conn.on('data', (data) => {
    console.log('Server Says: ', data);
  });
  conn.on('connect', () => {
    console.log('connection successfull!');
    conn.write(userName);
  });
  conn.on('end', () => {
    console.log('connection end!');
  });
  conn.setEncoding('utf8');
  return conn;
};

module.exports = { connect };

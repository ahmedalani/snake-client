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
  conn.on('connect', () => {
    console.log('connection successfull!');
    conn.write('Name: AHA');
  })
  conn.on('connect', () => {
    // conn.write('Move: up');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 500)
  })
  conn.on('end', (e) => {
    console.log('connection end!', e);
  })
  // conn.on('connect', () => {
  //   conn.write('Move: down');
  // })
  // conn.on('connect', () => {
  //   conn.write('Move: left');
  // })
  // conn.on('connect', () => {
  //   conn.write('Move: right');
  // })
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

module.exports = { connect };
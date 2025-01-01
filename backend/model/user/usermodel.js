const db = require('../../config/db');

function userLogin(callback, username, password) {
  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  const values = [username, password];

  db.query(query, values, callback);
}

module.exports = {userLogin};

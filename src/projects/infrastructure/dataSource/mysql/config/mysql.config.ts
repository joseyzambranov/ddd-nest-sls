const mysql = require('mysql2');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Sumer30031987.",
  database: "snap_project_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true
});

module.exports = {
  execute: async function (text, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, conn) {
        if (err) {
          console.error('Connection error', err);
          return reject(err);
        }
        conn.execute(text, values, function (err, result, fields) {
          if (err) {
            console.error('Query error', err);
            return reject('err');
          }
          conn.release();
          pool.releaseConnection(conn);
          let response = null;
          if (result) {
            response = result;
          }
          //if (fields) {
          //  response.push(fields);
          //}
          return resolve(response);
        })
      })
    })
  },
  first: async function (text, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, conn) {
        if (err) {
          console.error('Connection error', err);
          return reject(err);
        }
        conn.execute(text, values, function (err, result) {
          if (err) {
            console.error('Query error', err);
            return reject('err');
          }
          conn.release();
          pool.releaseConnection(conn);
          let firstRow = result.length > 0 ? result[0] : null;
          return resolve(firstRow);
        })
      })
    })
  },

}
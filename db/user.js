/*
    We are using the "node-mysql2" package to access database.
    This is similar to JDBC for Java, which we have learned in the database course.
    For detailed usage documentation, please refer to https://www.npmjs.com/package/mysql2
*/

// Import database connection pool, which we've prepared for you
const pool = require('./connection-pool');

module.exports = {
    findUsernameById: async function (id) {
        try {
            //let sql = 'SELECT username FROM User WHERE id = ?';
            let sql = 'SELECT * FROM User WHERE id = ?';
            let rows, fields;
            [rows, fields] = await pool.query(sql, [id]);
            //return rows[0]['username'];
            return rows[0];
        } catch (e){
            return null;
        }
    },
}

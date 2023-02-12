// TODO: write your game database access layer here

const pool = require('./connection-pool');

module.exports = {
    findGameInfoById: async function (id) {
        try {
            //let sql = 'SELECT username FROM User WHERE id = ?';
            // let sql = 'SELECT * FROM Game WHERE id = ?';
            let sql = 'select g.name, g.description, g.create_time_utc, g.start_time_utc, g.end_time_utc, g.init_cash,u.display_name,u.email From Game g, User u Where g.owner_fk = u.id and g.id = ?';
            let rows, fields;
            [rows, fields] = await pool.query(sql, [id]);
            //return rows[0]['username'];
            return rows[0];
        } catch (e){
            return null;
        }
    },
}
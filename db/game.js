// TODO: write your game database access layer here
const pool = require('./connection-pool');

module.exports = {
    findgameidbyfk: async function (id) {
        try {
            let sql = 'SELECT id FROM Game WHERE owner_fk = ?';
            let rows, fields;
            [rows, fields] = await pool.query(sql, [id]);
            console.log(rows)
            return rows;
            
        } catch (e){
            console.log('error')
            return null;
        }
    },

    findgamenumbyfk:async function (id) {
        try {
            let sql = 'SELECT COUNT(*) FROM Game WHERE owner_fk = ?';
            let rows, fields;
            [rows, fields] = await pool.query(sql, [id]);
            //console.log(rows[0]['COUNT(*)']);
            return rows[0]['COUNT(*)'];
            
        } catch (e){
            console.log('num error')
            return null;
        }
    },
}
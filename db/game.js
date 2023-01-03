// TODO: write your game database access layer here
const pool = require('./connection-pool');

module.exports = {
    findgameidbyfk: async function (id) {
        try {
            let sql = 'SELECT id,owner_fk FROM Game WHERE owner_fk = ?';
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
    information:async function (id) {
        try {
            let sql = 'SELECT * FROM Game WHERE id = ?';
            let rows, fields;
            console.log('1')
            [rows, fields] = await pool.query(sql, [id]);
            console.log('2')
            console.log(rows);
            return rows;
            
        } catch (e){
            console.log('num error')
            return null;
        }
    },
    wholegame: async function () {
        try {
            let sql = 'SELECT * FROM Game';
            let rows, fields;
            [rows] = await pool.query(sql);
            console.log(rows);
            return rows;
        } catch (e){
            return null;
        }
    },
}
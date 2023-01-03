const db = require("../db");
module.exports = {
    code:async function (req, res) {
        let gameId = req.params.id;
        let infor=await db.game.information(gameId);
        console.log(infor);
        if (infor) {
    
            return res.json({
                id: gameId,
                information:infor,
            });
        } else {
            return res.json("information not found");
        }
    },

    hello: async function (req, res) {
        let response = {
            code: 123,
            message: "Hello world!",
            time: Date.now(),
        }
        res.json(response)
    },
    whole: async function (req, res) {
        let users=await db.game.wholegame();

        console.log(users);

        if (users) {

            return res.json({
                infor:users,

            });
        } else {
            return res.json("User not found");
        }
    }

  
  
    
    /*
     * TODO: You can add your controller actors here.
     */
    
}

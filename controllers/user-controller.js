/*
    An example controller for your reference
*/
const db = require("../db");

module.exports = {
    find: async function (req, res) {
        let userId = req.params.id;
        let username = await db.user.findUsernameById(userId);
        let infor=await db.game.findgameidbyfk(userId);
        let gamenum=await db.game.findgamenumbyfk(userId);
        console.log(username);
        //console.log(gamenum)
        if (username) {
            // if the user is found
            return res.json({
                id: userId,//2
                username: username,//admin
                gamenum:gamenum,
                gameinformation:infor,
            });
        } else {
            return res.json("User not found");
        }
    },
    whole: async function (req, res) {
        let users=await db.user.wholeuser();

        console.log(users);
        if (users) {
            // if the user is found
            return res.json({
                infor:users,

            });
        } else {
            return res.json("User not found");
        }
    }
}

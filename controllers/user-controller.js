/*
    An example controller for your reference
*/
const db = require("../db");

module.exports = {
    find: async function (req, res) {
        let userId = req.params.id;
        let username = await db.user.findUsernameById(userId);
        console.log(username);
        console.log(username["username"])
        if (username) {
            // if the user is found
            return res.json({
                id: userId,
                //username: username
                username: username["username"]
            });
        } else {
            return res.json("User not found");
        }
    }
}

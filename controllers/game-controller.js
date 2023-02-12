const db = require("../db");

module.exports = {
    hello: async function (req, res) {
        let response = {
            code: 123,
            message: "Hello world!",
            time: Date.now(),
        }
        res.json(response)
    },
    
    
    /*
     * TODO: You can add your controller actors here.
     */
    displayGameInfo: async function (req, res) {
        let gameId = req.params.id;
        let gameInfo = await db.game.findGameInfoById(gameId);
        console.log(gameInfo);
        if (gameInfo) {
            //if the game is found
            return res.json({
                id: gameId,
                gamename: gameInfo["name"],
                time: Date.now(),
                gamedescription:gameInfo["description"],
                createTime: gameInfo["create_time_utc"],
                startTime: gameInfo["start_time_utc"],
                endTime: gameInfo["end_time_utc"],
                init_cash: gameInfo["init_cash"],
                userName: gameInfo["display_name"],
                userEmail: gameInfo["email"]
            });
            //return res.json(gameInfo)
        } else {
            return res.json("Game not found");
        }
    }
}

const db = require("../db");
module.exports = {
    code: async function (req, res) {
        let response = {
            code: 123,
            message: "Hello",
            time: Date.now(),
        }
        res.json(response)
    },

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
    
}

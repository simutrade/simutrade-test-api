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
    
}

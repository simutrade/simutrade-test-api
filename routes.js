var express = require('express');
const gameController = require('./controllers/game-controller');
const userController = require('./controllers/user-controller');
var router = express.Router();

router.get('/hello', gameController.hello);
router.get('/user/:id', userController.find);

/* TODO: You can add your routes here */

module.exports = router;

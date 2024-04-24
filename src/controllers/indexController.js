const {postCrearUsuario, getUserID, getUser, UserDeleteId, userPut}=require("./userController");
const { postCrearOrder, getOrder, getOrderID, orderDeleteId } = require("./orderController");
const { getGames, getGamesID, gamesPut, gamesDeleteId, postCrearGames} = require("./gamesController");

module.exports = {
    postCrearUsuario, getUserID, getUser, UserDeleteId, userPut,
    postCrearOrder, getOrder, getOrderID, orderDeleteId,
    getGames, getGamesID, gamesPut, gamesDeleteId, postCrearGames
}
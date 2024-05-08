const {postCrearUsuario, getUserID, getUsers, UserDeleteId, userPut}=require("./userController");
const { postCrearOrder, getOrder, getOrderID, orderDeleteId } = require("./orderController");
const { getGames, getGamesID, gamesPut, gamesDeleteId, postCrearGames, crearJuegosPrueba, getGamesFilterLimit, getCountGamesFilter} = require("./gamesController");
const { login } = require("./loginController");
const {tokenValid, tokenValidAdmin} = require("./authController");


module.exports = {
    postCrearUsuario, getUserID, getUsers, UserDeleteId, userPut,
    postCrearOrder, getOrder, getOrderID, orderDeleteId,
    getGames, getGamesID, gamesPut, gamesDeleteId, postCrearGames, crearJuegosPrueba,getGamesFilterLimit,getCountGamesFilter,
    login,
    tokenValid, tokenValidAdmin
}
const {postCrearUsuario, getUserID, getUsers, UserDeleteId, userPut, getUsersFilter}=require("./userController");
const { postCrearOrder, getOrder, getOrderID, orderDeleteId, putOrder } = require("./orderController");
const { getGames, getGamesID, gamesPut, gamesDeleteId, postCrearGames, crearJuegosPrueba, getGamesFilterLimit, getCountGamesFilter, getCategory, getGamesFilter} = require("./gamesController");
const { login, validToken } = require("./loginController");
const {tokenValid, tokenValidAdmin} = require("./authController");
const { enviarEmail } = require("./emailController");


module.exports = {
    postCrearUsuario, getUserID, getUsers, UserDeleteId, userPut,getUsersFilter,
    postCrearOrder, getOrder, getOrderID, orderDeleteId, putOrder,
    getGames, getGamesID, gamesPut, gamesDeleteId, postCrearGames, crearJuegosPrueba,getGamesFilterLimit,getCountGamesFilter,getCategory,getGamesFilter,
    login, validToken,
    tokenValid, tokenValidAdmin,
    enviarEmail
}
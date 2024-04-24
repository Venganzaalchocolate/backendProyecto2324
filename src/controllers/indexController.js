const {postCrearUsuario, getUserID, getUser, UserDeleteId, userPut}=require("./userController");
const {postCrearJuego}=require("./gamesController");
const { postCrearOrder, getOrder, getOrderID, orderDeleteId } = require("./orderController");

module.exports = {
    postCrearUsuario,
    getUserID,
    getUser,
    UserDeleteId,
    userPut,
    postCrearJuego,
    postCrearOrder,
    getOrder,
    getOrderID,
    orderDeleteId,
}
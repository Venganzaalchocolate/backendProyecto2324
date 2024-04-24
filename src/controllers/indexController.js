const {postCrearUsuario, getUserID, getUser, UserDeleteId, userPut}=require("./userController");
const {postCrearJuego}=require("./gamesController");

module.exports = {
    postCrearUsuario,
    getUserID,
    getUser,
    UserDeleteId,
    userPut,
    postCrearJuego
}
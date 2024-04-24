const express = require('express');
const router = express.Router()
const {postCrearUsuario, getUserID, getUser, UserDeleteId, userPut, postCrearJuego} = require('../controllers/indexController')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/users", urlencodedParser, getUser)
router.get("/user/:id", urlencodedParser, getUserID)
router.post("/crearusuario", urlencodedParser,postCrearUsuario)
router.delete("/borrarusuario/:id", urlencodedParser,UserDeleteId)
router.put("/actualizarusuario", urlencodedParser,userPut)

router.get("/crearjuego", urlencodedParser, postCrearJuego)


module.exports = router
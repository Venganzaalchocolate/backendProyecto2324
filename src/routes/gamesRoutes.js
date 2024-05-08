const express = require('express');
const router = express.Router()
const { getGames, getGamesID, postCrearGames, gamesDeleteId, gamesPut, tokenValidAdmin, crearJuegosPrueba, getGamesFilterLimit, getCountGamesFilter } = require('../controllers/indexController')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/games", urlencodedParser, getGames)
router.get("/crearjuegosprueba", urlencodedParser, crearJuegosPrueba)
router.get("/games/:id", urlencodedParser, getGamesID)
router.post("/creargames", urlencodedParser,tokenValidAdmin, postCrearGames)
router.delete("/borrargames/:id", urlencodedParser,tokenValidAdmin,gamesDeleteId)
router.put("/actualizargames", urlencodedParser,tokenValidAdmin,gamesPut)
router.get("/gamesfilter/:filtro/:principio/:fin", urlencodedParser,getGamesFilterLimit)
router.get("/gamescountgames/:filtro", urlencodedParser,getCountGamesFilter)

module.exports = router;
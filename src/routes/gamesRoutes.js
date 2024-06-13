const express = require('express');
const router = express.Router()
const { getGames, getGamesID, postCrearGames, gamesDeleteId, gamesPut, tokenValidAdmin, crearJuegosPrueba, getGamesFilterLimit, getCountGamesFilter, getCategory, getGamesFilter } = require('../controllers/indexController')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/games", urlencodedParser, getGames)
router.get("/games/:id", urlencodedParser, getGamesID)
router.post("/creargames", urlencodedParser,tokenValidAdmin, postCrearGames)
router.delete("/borrargames", urlencodedParser,tokenValidAdmin,gamesDeleteId)
router.put("/actualizargames", urlencodedParser,tokenValidAdmin,gamesPut)
router.post("/gamesfilterlimit", urlencodedParser,getGamesFilterLimit)
router.post("/gamesfilter", urlencodedParser,getGamesFilter)
router.post("/gamescountgames", urlencodedParser,getCountGamesFilter)
router.get("/gamescategory", urlencodedParser,getCategory)

module.exports = router;    
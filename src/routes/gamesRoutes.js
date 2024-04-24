const express = require('express');
const router = express.Router()
const { getGames, getGamesID, postCrearGames, gamesDeleteId, gamesPut } = require('../controllers/indexController')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/games", urlencodedParser, getGames)
router.get("/games/:id", urlencodedParser, getGamesID)
router.post("/creargames", urlencodedParser,postCrearGames)
router.delete("/borrargames/:id", urlencodedParser,gamesDeleteId)
router.put("/actualizargames", urlencodedParser,gamesPut)

module.exports = router;
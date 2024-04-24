const express = require('express');
const router = express.Router()
const {} = require('../controllers/indexController')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/games", urlencodedParser, )
router.get("/games/:id", urlencodedParser, getUserID)
router.post("/creargames", urlencodedParser,postCrearUsuario)
router.delete("/borrargames/:id", urlencodedParser,UserDeleteId)
router.put("/actualizargames", urlencodedParser,userPut)

module.exports = router;
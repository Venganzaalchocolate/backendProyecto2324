const express = require('express');
const router = express.Router()
const { tokenValid, enviarEmail} = require('../controllers/indexController')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post("/contacto", urlencodedParser, enviarEmail)

module.exports = router;
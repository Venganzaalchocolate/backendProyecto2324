const express = require('express');
const router = express.Router()
const { tokenValid, sendEmail} = require('../controllers/indexController')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post("/email", urlencodedParser, sendEmail)

module.exports = router;
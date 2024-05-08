const { login } = require("../controllers/indexController");
const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post("/login", urlencodedParser, login)

module.exports = router;
const express = require('express');
const router = express.Router()
const {getOrder, getOrderID, postCrearOrder, orderDeleteId} = require('../controllers/indexController')
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/orders", urlencodedParser, getOrder)
router.get("/order/:id", urlencodedParser, getOrderID)
router.post("/crearorder", urlencodedParser,postCrearOrder)
router.delete("/borrarorder/:id", urlencodedParser,orderDeleteId)

module.exports = router;
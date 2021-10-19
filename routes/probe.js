const express = require('express');
const router = express.Router();
const {probeCreat,probeGet} = require("../controllers/probe");

router.get('/sonde',probeGet)
router.post('/import-sonde', probeCreat)
module.exports = router
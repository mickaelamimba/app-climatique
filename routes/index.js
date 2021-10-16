var express = require('express');
const {customerGet, customerCreat, customerDelete, customerUpdate} = require("../controllers/customer");
const {probeGet, probeCreat} = require("../controllers/probe");
const {userGet, userCreat, userLogin, userUpdate, userDelete} = require("../controllers/user");
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/customer',customerGet)
router.post('/customer-post',customerCreat)
router.post('/customer-delete',customerDelete)
router.post('/customer-update',customerUpdate)

router.get('/sonde',probeGet)
router.post('/import-sonde', probeCreat)


router.get('/users',userGet)
router.post('/user-post',userCreat)
router.post('/login',userLogin)
router.post('/user-update',userUpdate)
router.post('/user-delete',userDelete)

module.exports = router;

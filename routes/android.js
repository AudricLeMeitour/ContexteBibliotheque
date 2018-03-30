var express = require('express');
var router = express.Router();


var controllerAndroid = require('../controller/controllerAndroid');
/* GET home page. */

router.get('/', controllerAndroid.index);
router.get('/listLivre', controllerAndroid.listLivre);


module.exports = router;
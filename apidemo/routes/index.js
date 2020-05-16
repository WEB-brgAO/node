var express = require('express');
var router = express.Router();

var cate = require('../controllers/cateControllers')

/* GET home page. */
router.get('/', cate.getuser);
router.post('/getpost', cate.getpost);
router.post('/addpost', cate.addpost);
router.post('/removepost',cate.removepost)
router.post('/getontitem',cate.getontitem)


module.exports = router;

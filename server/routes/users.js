const express = require('express'),
    router = express.Router(),
     userController = require('../controllers/users')


router.get('/', userController.index);

module.exports = router;

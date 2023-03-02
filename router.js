const express = require('express');
const path = require('path');
const router = express.Router();

const IndexController = require('./controller/indexController');


router.get('/', IndexController.index);
router.get('/about', IndexController.about)
router.get('/contacts', IndexController.contacts)

module.exports = router
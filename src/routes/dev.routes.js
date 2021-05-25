const controller = require('../controllers/dev.controller');
const router = require('express').Router();

router.get('/version', controller.getVersion);

module.exports = router;

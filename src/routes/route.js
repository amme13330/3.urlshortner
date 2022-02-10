const express = require('express');
const router = express.Router();

const urlController = require("../controllers/urlController")
const validation=require("../validations/validation");

router.get('/test-me', function (req, res) {
    res.send('Testing - My first ever api!')
});

router.post('/shortend',validation.middleware,urlController.createUrl);
router.get('/:code', urlController.getUrl);

module.exports = router;
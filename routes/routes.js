var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Main page');
});
router.get('/catalog', (req, res) => {
    res.send('Catalog page');
})
router.get('/contacts', (req, res) => {
    res.send('Contancts page');
})

module.exports = router;

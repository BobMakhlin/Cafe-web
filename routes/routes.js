var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index.hbs');
});
router.get('/catalog', (req, res) => {
    res.render('catalog.hbs');
});
router.get('/catalog/:id', (req, res) => {
    res.render('drink-details.hbs', { productId: req.params.id });
});
router.get('/contacts', (req, res) => {
    res.send('Contancts page');
});

module.exports = router;

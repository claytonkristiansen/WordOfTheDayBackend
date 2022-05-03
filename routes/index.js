var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => 
{
    res.render('index', { title: 'Express' });
});

router.get('/taco', (req, res, next) => 
{
    res.render('index', { title: 'TACOOOOo' });
});

router.post('/log', (req, res, next) => 
{
    console.log(req.body);
    res.json(req.body);
});

module.exports = router;

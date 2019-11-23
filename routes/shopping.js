var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    var account;
    var level;
    if (req.session.username) {
        account = req.session.username;
    }
    if (req.session.level) {
        level = req.session.level;
    }

    res.render('shopping.ejs', { account, level });
});

module.exports = router;

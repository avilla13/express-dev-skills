var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/skills', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

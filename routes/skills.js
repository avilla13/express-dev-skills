// routes/skills.js
var express = require('express');
var router = express.Router();

// ALl actual paths start with '/skills'
// Require the controller that exports Skills CRUD functions
const skillsCtrl = require('../controllers/skills');

module.exports = router;

// GET /skills
router.get('/', skillsCtrl.index);

//GET /skills/:id
router.get('/:id', skillsCtrl.show);
// routes/skills.js
var express = require('express');
var router = express.Router();

// ALl actual paths start with '/skills'
// Require the controller that exports Skills CRUD functions
const skillsCtrl = require('../controllers/skills');


// GET /skills
router.get('/', skillsCtrl.index);
// GET /skills/new (define BEFORE the show router)

// GET /skills/new
router.get('/new', skillsCtrl.new);

//GET /skills/:id
router.get('/:id', skillsCtrl.show);

// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);

// POST /skills
router.post('/', skillsCtrl.create);

// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);

// PUT /skills/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;
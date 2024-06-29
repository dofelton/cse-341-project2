const router = require('express').Router();

const travelcontroller = require('../controllers/travel');

router.get('/', travelcontroller.getAll); // 
router.get('/:id', travelcontroller.getById);

module.exports = router;
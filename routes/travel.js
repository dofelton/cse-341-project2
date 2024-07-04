const router = require('express').Router();
const passport = require('passport');

const travelcontroller = require('../controllers/travel');
const validation = require('../middleware/validate');
const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', travelcontroller.getAll);
router.get('/:id', travelcontroller.getById);

router.post('/', isAuthenticated, validation.saveLocation, travelcontroller.addLocation);
router.put('/:id', isAuthenticated, validation.saveLocation, travelcontroller.updateLocation);
router.delete('/:id', isAuthenticated, travelcontroller.deleteLocation);

module.exports = router;
const router = require('express').Router();

const travelcontroller = require('../controllers/travel');
const validation = require('../middleware/validate');

router.get('/', travelcontroller.getAll);
router.get('/:id', travelcontroller.getById);

router.post('/', validation.saveLocation, travelcontroller.addLocation);
router.put('/:id', validation.saveLocation, travelcontroller.updateLocation);
router.delete('/:id', travelcontroller.deleteLocation);

module.exports = router;
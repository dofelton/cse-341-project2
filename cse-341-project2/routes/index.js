const router = require('express').Router();

router.get('/', (req, res) => { res.send('Travel Locations site') });
router.use('/travel', require('/travel'));

module.exports = router;
const router = require('express').Router();

router.use('/', require('./swagger'));

router.use('/travel', require('./travel'));

module.exports = router;
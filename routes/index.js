const router = require('express').Router();

router.use('/', require('./projects'));
router.use('/issues', require('./issues'));


module.exports = router;
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const scheduleRoutes = require('./scheduleRoutes');

router.use('/users', userRoutes);
router.use('/data', scheduleRoutes);

module.exports = router;

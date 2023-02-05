const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes');
const exerciseRoutes = require('./exerciseRoutes');
const scheduleRoutes = require('./scheduleRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/exercises', exerciseRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/schedule', scheduleRoutes);

module.exports = router;

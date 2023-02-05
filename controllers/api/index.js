const router = require('express').Router();

const userRoutes = require('./userRoutes');
const scheduleRoutes = require('./scheduleDataRoutes');
const favoriteRoutes = require('./addFavorites');

router.use('/users', userRoutes);
router.use('/data', scheduleRoutes);
router.use('/favorite', favoriteRoutes);

module.exports = router;

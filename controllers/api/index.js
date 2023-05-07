const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./');

router.use('/users', userRoutes);
router.use('/', );

module.exports = router;

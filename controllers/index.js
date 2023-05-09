const router = require('express').Router();
const apiRoutes = require('./api');
const homeroutes = require('./homeRoute');
const dashboardroutes = require('./dashboardRoute');

router.use('/api', apiRoutes);
router.use('/', homeroutes);
router.use('/dashboard', dashboardroutes)

module.exports = router;

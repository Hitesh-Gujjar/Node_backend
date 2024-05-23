const express = require('express');
const { adminUsersRoutes } = require('./admin/admin-users');
const { jobRoutes } = require('../route/jobs-route/jobs');

const router = express.Router();

//admin routes;
router.use('/job-portal/admin/user/', adminUsersRoutes);
router.use('/job-portal/admin/user/job', jobRoutes);

module.exports = router;
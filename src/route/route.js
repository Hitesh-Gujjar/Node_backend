const express = require('express');
const {adminUsersRoutes}  = require('./admin/admin-users')

const router = express.Router();

//admin routes;
router.use('/job-portal/admin/user/', adminUsersRoutes);

module.exports = router;
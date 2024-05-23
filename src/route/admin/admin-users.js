const express = require('express');
const { createAdminUser, loginAdminUser } = require('../../controller/admin-controller/admin-user-controller')

const router = express.Router();

router.post('/create', createAdminUser);

router.post('/login',loginAdminUser);

const adminUsersRoutes = router

// export default adminUsersRoutes
module.exports = { adminUsersRoutes };

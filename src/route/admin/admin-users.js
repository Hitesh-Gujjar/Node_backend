const express = require('express');
const { createAdminUser, loginAdminUser } = require('../../controller/admin-controller/admin-user-controller');
const { validator } = require('../../middleware/validator.middleware');
const { adminValidation } = require('../../Validations/admin-user.validation');

const router = express.Router();

router.post(
    '/create',
    validator(adminValidation.createAdminUser),
    createAdminUser
);

router.post('/login', loginAdminUser);

const adminUsersRoutes = router

// export default adminUsersRoutes
module.exports = { adminUsersRoutes };

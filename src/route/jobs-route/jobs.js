const express = require("express");
const { createJob } = require("../../controller/jobs-controller/jobs");
const { authenticatedRequest } = require("../../middleware/auth.admin.middleware");
const {  validator } = require("../../middleware/validator.middleware");
const { jobValidation } = require("../../Validations/jobs.validation");

const router = express.Router();

router.post(
    "/create",
    authenticatedRequest,
    validator(jobValidation.createJob),
    createJob
);



const jobRoutes = router;

// export default adminUsersRoutes
module.exports = { jobRoutes };

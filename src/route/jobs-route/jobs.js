const express = require("express");
const { createJob } = require("../../controller/jobs-controller/jobs");
const { authenticatedRequest } = require("../../middleware/auth.admin.middleware")

const router = express.Router();

router.post(
    "/create", authenticatedRequest, createJob
);



const jobRoutes = router;

// export default adminUsersRoutes
module.exports = { jobRoutes };

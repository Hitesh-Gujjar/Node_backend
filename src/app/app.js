const express = require('express');
const apiRoutes = require('../route/route');
// const {adminUsersRoutes}=require('../route/admin/admin-users')
const cors = require('cors');

const app = express();
console.log("Hello")
app.use(express.json());
app.use(cors())
app.use(apiRoutes);

module.exports = app;
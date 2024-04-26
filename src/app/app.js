const express = require('express');
const apiRoutes = require('../route/route');
// const {adminUsersRoutes}=require('../route/admin/admin-users')
const cors = require('cors');

const app = express();
console.log("Hello")
app.use(express.json());
app.use(cors())
app.use(apiRoutes);
// app.get('/admin/create',(req,res)=>{return res.send("sada")})

module.exports = app;
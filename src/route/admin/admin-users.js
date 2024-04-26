const express = require('express');
const { createAdminUser } = require('../../controller/admin-controller/admin-user-controller')

const router = express.Router();

// router.post(
//     `/create`,
//   (req,res)=>{
    
//     console.log("hello");
//     res.send('gdfsd')
//   }
// )

router.post('/create',createAdminUser)

const adminUsersRoutes = router

// export default adminUsersRoutes
module.exports = {adminUsersRoutes};

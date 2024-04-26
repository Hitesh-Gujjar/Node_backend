const express =require();
const app =express();

const router = app.Router();

router.post(
    ``,
    authenticateRequests,
    upload.single('profile_image'),
    validator(AdminValidations.updateAdmin),
    AdminUsersController.updateAdmin
  )

router.post()
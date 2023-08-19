const express = require("express");
const asyncHandler = require("express-async-handler");
const ctrl = require("../../controllers/users");
const { validateBody } = require("../../middlewares");
const { userSchemas } = require("../../models");

const router = express.Router();

router.post(
  "/auth/register",
  validateBody(userSchemas.registerSchema),
  asyncHandler(ctrl.register)
);
router.post(
  "/auth/login",
  validateBody(userSchemas.loginSchema),
  asyncHandler(ctrl.login)
);

module.exports = router;
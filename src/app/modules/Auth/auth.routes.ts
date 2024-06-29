import express from "express";
import { authControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "./auth.validation";

const router = express.Router();

router.post("/login", authControllers.loginUser);

router.post("/refresh-token", authControllers.refreshToken);

router.post(
  "/change-password",
  validateRequest(AuthValidation.changePasswordZodSchema),
  authControllers.changePassword
);

export const authRoutes = router;

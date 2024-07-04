import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { resumeValidationSchemas } from "./resume.validation";
import { resumeControllers } from "./resume.controller";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", resumeControllers.getResumeUrl);

router.post(
  "/",
  auth(),
  validateRequest(resumeValidationSchemas.createOrUpdateResumeSchema),
  resumeControllers.createOrUpdateResume
);

export const resumeRoutes = router;

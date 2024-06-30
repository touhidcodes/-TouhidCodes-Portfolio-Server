import express from "express";
import { projectValidationSchemas } from "./project.validation";
import { projectControllers } from "./project.controller";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.get("/", projectControllers.getProjects);

router.post(
  "/",
  validateRequest(projectValidationSchemas.createProjectSchema),
  projectControllers.createProject
);

router.get("/:projectId", projectControllers.getProjectById);

router.put(
  "/:projectId",
  validateRequest(projectValidationSchemas.updateProjectSchema),
  projectControllers.updateProject
);

router.delete("/:projectId", projectControllers.deleteProject);

export const projectRoutes = router;

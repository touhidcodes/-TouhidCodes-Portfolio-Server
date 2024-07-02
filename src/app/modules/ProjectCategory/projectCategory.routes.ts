import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { projectCategoryValidationSchemas } from "./projectCateory.validation";
import { projectCategoryControllers } from "./projectCategory.controller";
import auth from "../../middlewares/auth";

const router = Router();

router.post(
  "/",
  auth(),
  validateRequest(projectCategoryValidationSchemas.createProjectCategorySchema),
  projectCategoryControllers.createProjectCategory
);

router.get("/", projectCategoryControllers.getProjectCategories);

router.delete("/:categoryId", projectCategoryControllers.deleteProjectCategory);

export const projectCategoryRoutes = router;

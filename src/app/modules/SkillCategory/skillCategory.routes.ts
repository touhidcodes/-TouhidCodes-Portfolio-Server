import { Router } from "express";
import { skillCategoryControllers } from "./skillCategory.controller";
import validateRequest from "../../middlewares/validateRequest";
import { skillCategoryValidationSchemas } from "./skillCategory.validation";
import auth from "../../middlewares/auth";

const router = Router();

router.post(
  "/",
  auth(),
  validateRequest(skillCategoryValidationSchemas.createSkillCategorySchema),
  skillCategoryControllers.createSkillCategory
);

router.get("/", skillCategoryControllers.getSkillCategories);

router.delete(
  "/:categoryId",
  auth(),
  skillCategoryControllers.deleteSkillCategory
);

export const skillsCategoryRoutes = router;

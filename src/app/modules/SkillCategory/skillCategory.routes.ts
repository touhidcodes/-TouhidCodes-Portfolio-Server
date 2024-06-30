import { Router } from "express";
import { skillCategoryControllers } from "./skillCategory.controller";
import validateRequest from "../../middlewares/validateRequest";
import { skillCategoryValidationSchemas } from "./skillCategory.validation";

const router = Router();

router.post(
  "/",
  validateRequest(skillCategoryValidationSchemas.createSkillCategorySchema),
  skillCategoryControllers.createSkillCategory
);

router.get("/", skillCategoryControllers.getSkillCategories);

router.put(
  "/:categoryId",
  validateRequest(skillCategoryValidationSchemas.updateSkillCategorySchema),
  skillCategoryControllers.updateSkillCategory
);

router.delete("/:categoryId", skillCategoryControllers.deleteSkillCategory);

export const skillsCategoryRoutes = router;

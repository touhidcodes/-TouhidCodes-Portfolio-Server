import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { skillControllers } from "./skill.controller";
import { skillValidationSchemas } from "./skill.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(skillValidationSchemas.createSkillSchema),
  skillControllers.createSkill
);

router.get("/", skillControllers.getSkills);

router.put(
  "/:skillId",
  validateRequest(skillValidationSchemas.updateSkillSchema),
  skillControllers.updateSkill
);

router.delete("/:skillId", skillControllers.deleteSkill);

export const skillsRoutes = router;

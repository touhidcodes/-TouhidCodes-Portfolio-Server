import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { skillControllers } from "./skill.controller";
import { skillValidationSchemas } from "./skill.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  auth(),
  validateRequest(skillValidationSchemas.createSkillSchema),
  skillControllers.createSkill
);

router.get("/", skillControllers.getSkills);
router.get("/all", skillControllers.getGroupedSkills);

router.put(
  "/:skillId",
  auth(),
  validateRequest(skillValidationSchemas.updateSkillSchema),
  skillControllers.updateSkill
);

router.delete("/:skillId", auth(), skillControllers.deleteSkill);

export const skillsRoutes = router;

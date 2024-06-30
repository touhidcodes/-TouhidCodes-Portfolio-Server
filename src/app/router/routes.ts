import express from "express";
import { authRoutes } from "../modules/Auth/auth.routes";
import { skillsRoutes } from "../modules/Skills/skill.router";
import { skillsCategoryRoutes } from "../modules/SkillCategory/skillCategory.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    route: authRoutes,
  },
  {
    path: "/skill",
    route: skillsRoutes,
  },
  {
    path: "/skill-category",
    route: skillsCategoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

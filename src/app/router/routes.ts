import express from "express";
import { authRoutes } from "../modules/Auth/auth.routes";
import { skillsRoutes } from "../modules/Skill/skill.routes";
import { skillsCategoryRoutes } from "../modules/SkillCategory/skillCategory.routes";
import { projectRoutes } from "../modules/Project/project.routes";
import { projectCategoryRoutes } from "../modules/ProjectCategory/projectCategory.routes";
import { blogRoutes } from "../modules/Blog/blog.routes";
import { blogCategoryRoutes } from "../modules/BlogCategory/blogCategory.routes";

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
  {
    path: "/project",
    route: projectRoutes,
  },
  {
    path: "/project-category",
    route: projectCategoryRoutes,
  },
  {
    path: "/blog",
    route: blogRoutes,
  },
  {
    path: "/blog-category",
    route: blogCategoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

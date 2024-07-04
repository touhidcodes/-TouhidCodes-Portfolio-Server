import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { blogCategoryValidationSchemas } from "./blogCategory.validation";
import { blogCategoryControllers } from "./blogCategory.controller";
import auth from "../../middlewares/auth";

const router = Router();

router.post(
  "/",
  auth(),
  validateRequest(blogCategoryValidationSchemas.createBlogCategorySchema),
  blogCategoryControllers.createBlogCategory
);

router.get("/", blogCategoryControllers.getBlogCategories);

router.delete(
  "/:categoryId",
  auth(),
  blogCategoryControllers.deleteBlogCategory
);

export const blogCategoryRoutes = router;

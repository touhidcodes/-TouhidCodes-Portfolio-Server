import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { blogCategoryValidationSchemas } from "./blogCategory.validation";
import { blogCategoryControllers } from "./blogCategory.controller";

const router = Router();

router.post(
  "/",
  validateRequest(blogCategoryValidationSchemas.createBlogCategorySchema),
  blogCategoryControllers.createBlogCategory
);

router.get("/", blogCategoryControllers.getBlogCategories);

router.delete("/:categoryId", blogCategoryControllers.deleteBlogCategory);

export const blogCategoryRoutes = router;

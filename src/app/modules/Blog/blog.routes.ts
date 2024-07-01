import express from "express";
import { blogValidationSchemas } from "./blog.validation";
import { blogControllers } from "./blog.controller";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.get("/", blogControllers.getBlogs);

router.post(
  "/",
  validateRequest(blogValidationSchemas.createBlogSchema),
  blogControllers.createBlog
);

router.get("/:blogId", blogControllers.getBlogById);

router.put(
  "/:blogId",
  validateRequest(blogValidationSchemas.updateBlogSchema),
  blogControllers.updateBlog
);

router.delete("/:blogId", blogControllers.deleteBlog);

export const blogRoutes = router;

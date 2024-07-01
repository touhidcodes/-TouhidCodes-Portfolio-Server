import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogCategoryServices } from "./blogCategory.service";

const createBlogCategory = catchAsync(async (req, res) => {
  const result = await blogCategoryServices.createBlogCategory(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog category created successfully!",
    data: result,
  });
});

const getBlogCategories = catchAsync(async (req, res) => {
  const result = await blogCategoryServices.getBlogCategories();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog categories retrieved successfully!",
    data: result,
  });
});

const deleteBlogCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const result = await blogCategoryServices.deleteBlogCategory(categoryId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog category deleted successfully!",
    data: result,
  });
});

export const blogCategoryControllers = {
  createBlogCategory,
  getBlogCategories,
  deleteBlogCategory,
};

import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectCategoryServices } from "./projectCategory.service";

const createProjectCategory = catchAsync(async (req, res) => {
  const result = await projectCategoryServices.createProjectCategory(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "project category created successfully!",
    data: result,
  });
});

const getProjectCategories = catchAsync(async (req, res) => {
  const result = await projectCategoryServices.getProjectCategories();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "project categories retrieved successfully!",
    data: result,
  });
});

const deleteProjectCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const result = await projectCategoryServices.deleteProjectCategory(
    categoryId
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "project category deleted successfully!",
    data: result,
  });
});

export const projectCategoryControllers = {
  createProjectCategory,
  deleteProjectCategory,
  getProjectCategories,
};

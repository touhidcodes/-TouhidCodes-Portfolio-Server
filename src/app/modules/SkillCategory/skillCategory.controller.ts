import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { skillCategoryServices } from "./skillCategory.service";

const createSkillCategory = catchAsync(async (req, res) => {
  const result = await skillCategoryServices.createSkillCategory(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Skill category created successfully!",
    data: result,
  });
});

const getSkillCategories = catchAsync(async (req, res) => {
  const result = await skillCategoryServices.getSkillCategories();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill categories retrieved successfully!",
    data: result,
  });
});

const updateSkillCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const result = await skillCategoryServices.updateSkillCategory(
    categoryId,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill category updated successfully!",
    data: result,
  });
});

const deleteSkillCategory = catchAsync(async (req, res) => {
  const { categoryId } = req.params;
  const result = await skillCategoryServices.deleteSkillCategory(categoryId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill category deleted successfully!",
    data: result,
  });
});

export const skillCategoryControllers = {
  createSkillCategory,
  updateSkillCategory,
  deleteSkillCategory,
  getSkillCategories,
};

import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { skillServices } from "./skill.service";

const getSkills = catchAsync(async (req, res) => {
  const result = await skillServices.getSkills();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skills retrieved successfully!",
    data: result,
  });
});
const getGroupedSkills = catchAsync(async (req, res) => {
  const result = await skillServices.getGroupedSkills();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Grouped skills retrieved successfully!",
    data: result,
  });
});

const createSkill = catchAsync(async (req, res) => {
  const result = await skillServices.createSkill(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Skill created successfully!",
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const { skillId } = req.params;
  const result = await skillServices.updateSkill(skillId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill updated successfully!",
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const { skillId } = req.params;
  const result = await skillServices.deleteSkill(skillId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill deleted successfully!",
    data: result,
  });
});

export const skillControllers = {
  getSkills,
  getGroupedSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};

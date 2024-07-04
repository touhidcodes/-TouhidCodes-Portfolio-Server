import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { resumeServices } from "./resume.service";

const createOrUpdateResume = catchAsync(async (req, res) => {
  const result = await resumeServices.createOrUpdateResume(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resume url updated successfully!",
    data: result,
  });
});

const getResumeUrl = catchAsync(async (req, res) => {
  const result = await resumeServices.getResumeUrl();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Resume url retrieved successfully!",
    data: result,
  });
});

export const resumeControllers = { createOrUpdateResume, getResumeUrl };

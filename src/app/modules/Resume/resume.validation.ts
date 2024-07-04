import { z } from "zod";

const createOrUpdateResumeSchema = z.object({
  body: z.object({
    url: z
      .string({
        required_error: "Resume url is required",
      })
      .min(1, "Resume url cannot be empty"),
  }),
});

export const resumeValidationSchemas = {
  createOrUpdateResumeSchema,
};

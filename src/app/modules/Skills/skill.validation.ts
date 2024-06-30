import { z } from "zod";

const createSkillSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Skill name is required",
      })
      .min(1, "Skill name cannot be empty"),
    skillCategoryId: z.string({
      required_error: "Category ID is required",
    }),
    level: z.enum(["Junior", "Intermediate", "Expert"], {
      required_error: "Skill level is required",
    }),
    icon: z.string({
      required_error: "Skill level is required",
    }),
  }),
});

const updateSkillSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Skill name cannot be empty").optional(),
    skillCategoryId: z.string().uuid("Invalid category ID format").optional(),
    level: z.enum(["Beginner", "Intermediate", "Advanced"]).optional(),
    icon: z.string().min(1, "Icon cannot be empty").optional(),
    description: z.string().min(1, "Description cannot be empty").optional(),
  }),
});

export const skillValidationSchemas = {
  createSkillSchema,
  updateSkillSchema,
};

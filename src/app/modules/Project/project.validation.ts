import { z } from "zod";

const createProjectSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Project title is required",
      })
      .min(1, "Project title cannot be empty"),
    description: z
      .string({
        required_error: "Description is required",
      })
      .min(1, "Description cannot be empty"),
    technologies: z.array(z.string()).min(1, {
      message: "Technologies must include at least one item",
    }),
    frontEndGithubLink: z.string().optional(),
    backEndGithubLink: z.string().optional(),
    frontEndLiveLink: z.string().optional(),
    backEndLiveLink: z.string().optional(),
    details: z
      .string({
        required_error: "Details are required",
      })
      .min(1, "Details cannot be empty"),
    thumbnail: z.string().optional(),
    fullImage: z.string().optional(),
    categoryId: z
      .string({
        required_error: "Category ID is required",
      })
      .min(1, "Category ID cannot be empty"),
  }),
});

const updateProjectSchema = z.object({
  body: z.object({
    title: z.string().min(3).max(50).optional(),
    description: z.string().min(1).optional(),
    technologies: z.array(z.string()).min(1).optional(),
    frontEndGithubLink: z.string().optional(),
    backEndGithubLink: z.string().optional(),
    frontEndLiveLink: z.string().optional(),
    backEndLiveLink: z.string().optional(),
    details: z.string().min(1).optional(),
    thumbnail: z.string().optional(),
    fullImage: z.string().optional(),
    featured: z.boolean().optional(),
    categoryId: z.string().optional(),
  }),
});

export const projectValidationSchemas = {
  createProjectSchema,
  updateProjectSchema,
};

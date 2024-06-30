import { z } from "zod";

const createProjectSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: "Project title is required",
      })
      .min(1, "Project title cannot be empty"),
  }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(1, "Description cannot be empty"),

  technologies: z.array(z.string()).min(1),
  frontEndGithubLink: z.string().optional(),
  backEndGithubLink: z.string().optional(),
  frontEndLiveLink: z.string().optional(),
  backEndLiveLink: z.string().optional(),
  details: z.string().min(1),
  thumbnail: z.string().optional(),
  fullImage: z.string().optional(),
  categoryId: z.string(),
});

const updateProjectSchema = z.object({
  body: z.object({
    title: z.string().min(3).max(50).optional(),
    description: z.string().min(10).max(500).optional(),
    technologies: z.array(z.string()).min(1).optional(),
    frontEndGithubLink: z.string().url().optional(),
    backEndGithubLink: z.string().url().optional(),
    frontEndLiveLink: z.string().url().optional(),
    backEndLiveLink: z.string().url().optional(),
    details: z.string().min(1).optional(),
    thumbnail: z.string().url().optional(),
    fullImage: z.string().url().optional(),
    featured: z.boolean().optional(),
    categoryId: z.string().optional(),
  }),
});

export const projectValidationSchemas = {
  createProjectSchema,
  updateProjectSchema,
};

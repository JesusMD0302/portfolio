import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const jobs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/jobs" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.string().or(z.number()),
    endDate: z.string().or(z.number()).optional(),
    description: z.string(),
    responsibilities: z.array(z.string()),
    isActive: z.boolean(),
    order: z.number().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url().optional(),
    technologies: z.array(z.string()),
    isDemo: z.boolean(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
        })
      )
      .optional(),
    cover: z.object({
      src: z.string(),
      alt: z.string().optional(),
    }),
    order: z.number().optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    career: z.string(),
    institution: z.string(),
    startDate: z.number(),
    endDate: z.number().nullable(),
  }),
});

export const collections = {
  projects,
  jobs,
  education,
};

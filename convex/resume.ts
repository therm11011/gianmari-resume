import { query } from "./_generated/server.js";
import { v } from "convex/values";

export const getProfile = query({
  args: v.object({}),
  handler: async (ctx) => {
    return await ctx.db.query("profile").first();
  },
});

export const getEducation = query({
    args: v.object({}),
    handler: async (ctx) => {
        return await ctx.db.query("education").collect();
    } 
});

export const getExperiences = query({
  args: v.object({}),
  handler: async (ctx) => {
    return await ctx.db.query("experience").collect();
  }
});

export const getSkills = query({
  args: v.object({}),
  handler: async (ctx) => {
    return await ctx.db.query("skills").collect();
  }
});

export const getProjects = query({
  args: v.object({}),
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  }
});

export const getReferences = query({
  args: v.object({}),
  handler: async (ctx) => {
    return await ctx.db.query("references").collect();
  }
});

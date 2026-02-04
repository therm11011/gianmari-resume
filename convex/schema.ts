import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    profile: defineTable({
        name: v.string(),
        title: v.string(),
        summary: v.string(),
        email: v.string(),
        location: v.string(),
    }).index("byName", ["name"]),

    education: defineTable({
        institution: v.string(),
        degree: v.string(),
        fieldOfStudy: v.string(),
        startDate: v.string(),
        endDate: v.string(),
        description: v.string(),
    }),
    
    experience: defineTable({
        company: v.string(),
        location: v.string(),
        title: v.string(),
        jobType: v.string(),
        startDate: v.string(),
        endDate: v.string(),
        description: v.string(),
    }),

    skills: defineTable({
        name: v.string(),
        yearsOfExperience: v.number(),
    }).index("byName", ["name"]),

    projects: defineTable({
        name: v.string(),
        description: v.string(),
        link: v.string(),
    }).index("byName", ["name"]),

    references: defineTable({
        name: v.string(),
        jobTitle: v.string(),
        contactInfo: v.string(),
    }).index("byName", ["name"]),
});
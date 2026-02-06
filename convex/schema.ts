import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    profile: defineTable({
        name: v.string(),
        title: v.string(),
        number: v.string(),
        summary: v.string(),
        email: v.string(),
        location: v.string(),
        links: v.array(v.string()),
    }).index("byName", ["name"]),

    education: defineTable({
        institution: v.string(),
        degree: v.string(),
        fieldOfStudy: v.string(),
        startDate: v.string(),
        endDate: v.string(),
        description: v.string(),
    }).index("byInstitution", ["institution"]),

    experience: defineTable({
        company: v.string(),
        location: v.string(),
        title: v.string(),
        jobType: v.string(),
        startDate: v.string(),
        endDate: v.string(),
        description: v.string(),
    }).index("by_unique_experience", ["company", "title", "startDate"]),

    skills: defineTable({
        name: v.string(),
        skillType: v.string(),
    }).index("bySkillType", ["skillType"]),

    projects: defineTable({
        title: v.string(),
        projectType: v.string(),
        projectFor: v.string(),
        description: v.string(),
        link: v.string(),
    }).index("byTitle", ["title"]),

    certifications: defineTable({
        title: v.string(),
        companyIssuer: v.string(),
        dateIssued: v.string(),
        dateExpiry: v.string(),
        link: v.string(),
    }).index("byTitle", ["title"]),
    
    references: defineTable({
        name: v.string(),
        jobTitle: v.string(),
        company: v.string(),
        contactInfo: v.string(),
    }).index("byName", ["name"]),
});
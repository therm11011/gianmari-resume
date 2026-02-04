import { mutation } from "./_generated/server";

export const seedProfile = mutation({
  args: {},
  handler: async (ctx) => {
    await ctx.db.insert("profile", {
      name: "Your Name",
      title: "Frontend Developer",
      summary: "Vue + Convex developer building clean web apps.",
      email: "you@email.com",
      location: "Remote",
    });
  },
});

export const seedEducation = mutation({
    args: {},
    handler: async (ctx) => {
        await ctx.db.insert("education", {
            institution: "University Name",
            degree: "Bachelor of Science in Computer Science",
            fieldOfStudy: "Computer Science",
            startDate: "Sep 2015",
            endDate: "Jun 2019",
            description: "Graduated with honors, focusing on software development and algorithms.",
        });
    }
});

export const seedExperience = mutation({
  args: {},
  handler: async (ctx) => {
    await ctx.db.insert("experience", {
        company: "Tech Corp",
        location: "New York, NY",
        title: "Software Engineer",
        jobType: "Full-time",
        startDate: "Jan 2020",
        endDate: "Dec 2022",
        description: "Developed web applications using modern frameworks.",
    });

    await ctx.db.insert("experience", {
        company: "Tech Corp",
        location: "New York, NY",
        title: "Software Engineer",
        jobType: "Full-time",
        startDate: "Jan 2020",
        endDate: "Dec 2022",
        description: "Developed web applications using modern frameworks.",
    });

    await ctx.db.insert("experience", {
        company: "Tech Corp",
        location: "New York, NY",
        title: "Software Engineer",
        jobType: "Full-time",
        startDate: "Jan 2020",
        endDate: "Dec 2022",
        description: "Developed web applications using modern frameworks.",
    });
    },
});

export const seedSkills = mutation({
    args: {},
    handler: async (ctx) => {
        await ctx.db.insert("skills", {
            name: "JavaScript",
            yearsOfExperience: 5,
        });
    }
});

export const seedProjects = mutation({
    args: {},
    handler: async (ctx) => {
        await ctx.db.insert("projects", {
            name: "Portfolio Website",
            description: "A personal portfolio website to showcase my projects.",
            link: "https://yourportfolio.com",
        });
    }
});

export const seedReferences = mutation({
    args: {},
    handler: async (ctx) => {
        await ctx.db.insert("references", {
            name: "Jane Doe",
            jobTitle: "Senior Manager at Tech Corp",
            contactInfo: "",
        });
    },
});

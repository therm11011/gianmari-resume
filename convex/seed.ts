import { mutation } from "./_generated/server";

export const seedProfile = mutation({
  args: {},
  handler: async (ctx) => {
    const existingProfile = await ctx.db
      .query("profile")
      .first();

    if (existingProfile) {
      // Already seeded → skip
      return;
    }

    await ctx.db.insert("profile", {
        
      name: "Gian Mari Ramos",
      title: "Web Developer",
      number: "+639398239105",
      summary: "A computer science graduate with a diverse experience seeking for opportunities with determination, and motivation to grow and look forward to the future with a clear understanding of work and training through experience. I adapt easily to new challenges and enjoy solving complex problems. I am always eager to learn, collaborate, and create high-quality solutions.",
      email: "giaaanmari@gmail.com",
      location: "Naga City, Camarines Sur 4400",
      links: ["https://www.facebook.com/giaaanmari/","https://www.linkedin.com/in/gianmari/"],
    });
  },
});

export const seedEducation = mutation({
    args: {},
    handler: async (ctx) => {
        await ctx.db.insert("education", {
            institution: "Ateneo de Naga University",
            degree: "Bachelor of Science in Computer Science",
            fieldOfStudy: "Computer Science",
            startDate: "June 2018",
            endDate: "June 2023",
            description: "Focused on different technological approaches in Web development and Natural Language Processing.",
        });
    }
});

export const seedExperience = mutation({
  args: {},
  handler: async (ctx) => {
        const experiences = [
        {
            company: "College of Computer Studies",
            location: "Naga City, Camarines Sur",
            title: "Front-End Developer",
            jobType: "Intern",
            startDate: "June 2022",
            endDate: "July 2022",
            description: "Designed and Implemented Front-end components of Gamification of Academic Programs.",
        },
            {
            company: "Advanced World Solutions",
            location: "Alabang, Muntinlupa",
            title: "Jr. R&D Engineer",
            jobType: "Full-time",
            startDate: "July 2023",
            endDate: "September 2023",
            description: "Exposed to IT Fundamentals and Nihonggo Languages",
        },
        {
            company: "Ateneo de Naga University",
            location: "Naga City, Camarines Sur",
            title: "Voluntary Network/IT Staff",
            jobType: "Voluntary",
            startDate: "January 2024",
            endDate: "May 2024",
            description:
            "Volunteered in the office of Networks and Communications to expand my knowledge of the industry and also absorb the ethics of a workplace. Was trained to troubleshoot networks, telephones to different departments within the campus. Also, taught to configure and deploy different devices.",
        },
        {
            company: "Provincial Government of Camarines Sur",
            location: "Pili, Camarines Sur",
            title: "Computer Instructor/Unity Game Programmer",
            jobType: "Contract of Service",
            startDate: "July 2024",
            endDate: "Present",
            description:
            "Exposed to different game applications of Unity Game Engine and C# Programming. Also created different learning modules for game development. Also exposed to web development and quality assurance of different systems with different frameworks.",
        },
        ];

        for (const exp of experiences) {
            const exists = await ctx.db
            .query("experience")
            .withIndex("by_unique_experience", q =>
                q
                .eq("company", exp.company)
                .eq("title", exp.title)
                .eq("startDate", exp.startDate)
            )
            .first();

            if (!exists) {
            await ctx.db.insert("experience", exp);
            }
        }
    },
});

export const seedSkills = mutation({
    args: {},
    handler: async (ctx) => {
        await ctx.db.insert("skills", {
            name: "Game Development",
            skillType: "technical"
        });
        await ctx.db.insert("skills", {
            name: "Web Development",
            skillType: "technical"
        });
        await ctx.db.insert("skills", {
            name: "Natural Language Processing(Chatbot) Development",
            skillType: "technical"
        });
        await ctx.db.insert("skills", {
            name: "Google Workspace",
            skillType: "technical"
        });
        await ctx.db.insert("skills", {
            name: "MS Office Suite",
            skillType: "technical"
        });
        await ctx.db.insert("skills", {
            name: "JavaScript",
            skillType: "technical"
        });
        await ctx.db.insert("skills", {
            name: "Programming Languages(C#, PHP, Python)",
            skillType: "technical"
        });
        await ctx.db.insert("skills", {
            name: "Frameworks(Flask, Laravel)",
            skillType: "technical"
        });
        await ctx.db.insert("skills", {
            name: "CSS Framework(Tailwind)",
            skillType: "technical"
        });
        await ctx.db.insert("skills", {
            name: "Game Engines(Unity)",
            skillType: "technical"
        });
        await ctx.db.insert("skills", {
            name: "Basic Management and  Troubleshooting(Computers, Networks, and Telephones)",
            skillType: "technical"
        });
        await ctx.db.insert("skills", {
            name: "Manual Testing(Black box and White box)",
            skillType: "technical"
        });
        await ctx.db.insert("skills", {
            name: "API Validation tools(Postman)",
            skillType: "technical"
        });
    }
});

export const seedProjects = mutation({
    args: {},
    handler: async (ctx) => {
        await ctx.db.insert("projects", {
            title: "Gamification of Academic Programs",
            projectType: "Virtual Internship",
            projectFor: "Ateneo de Naga University: College of Computer Studies",
            description: "Assigned to lead the Front-end Development Team to design and develop a web application for Gamification of Academic Programs. Also engage with the different committees(Back-end, Design Team) to share insights of the project.",
            link: "",
        });
        await ctx.db.insert("projects", {
            title: "Goldy: An NLP Application Chatbot in English Subject for Primary Education",
            projectType: "Senior Thesis",
            projectFor: "Ateneo de Naga University",
            description: "Goldy is a chatbot designed to help elementary students in their English subject. Implemented an NLP Neural-Network using Python as the main programming language and showcased it as a web application using Flask and TailwindCSS. Assigned to train the Neural Network Model and the backend development.",
            link: "",
        });
        await ctx.db.insert("projects", {
            title: "book.visitcamsur.com",
            projectType: "Booking Website",
            projectFor: "Provincial Government of Camarines Sur",
            description: "book.visitcamsur.com is the official booking system of visitcamsur.com, my contribution for this project was I was assigned to collaborate with the frontend of the system to produce the necessary features based on the given interface designs. ",
            link: "book.visitcamsur.com",
        });
        await ctx.db.insert("projects", {
            title: "visitcamsur.com",
            projectType: "Official Tourism Website",
            projectFor: "Provincial Government of Camarines Sur",
            description: "Visitcamsur.com is the official website of the Provincial Government of Camarines Sur to promote the tourism of Camarines Sur. I was assigned to implement different pages and revisions based on the interface designs given.",
            link: "visitcamsur.com",
        });
        await ctx.db.insert("projects", {
            title: "cwcwake.com",
            projectType: "Official Website of Camsur Watersports Complex",
            projectFor: "Provincial Government of Camarines Sur",
            description: "cwcwake.com is the official website of the CamSur Watersports Complex(CWC). I was assigned to revise different data entries from different pages using FileZilla.",
            link: "",
        });
    }
});

export const seedCertifications = mutation({
    args: {},
    handler: async (ctx) => {
        await ctx.db.insert("certifications", {
            title: "Google Certified Educator Level 1",
            companyIssuer: "Google for Education",
            dateIssued: "December 9, 2025",
            dateExpiry: "December 9, 2028",
            link: "https://edu.google.accredible.com/0a4c61fb-c23f-47b3-a65b-c43e591c150c#acc.wBj4bFMR"
        });

        await ctx.db.insert("certifications", {
            title: "Google Certified Educator Level 2",
            companyIssuer: "Google for Education",
            dateIssued: "December 9, 2025",
            dateExpiry: "December 9, 2028",
            link: "https://edu.google.accredible.com/e3ad7c65-6e27-480a-8d8f-be56418a011d#acc.bHYtasrO",
        });
    },
});

export const seedReferences = mutation({
    args: {},
    handler: async (ctx) => {
        await ctx.db.insert("references", {
            name: "Jeric Marx R. Natividad",
            jobTitle: "Computer Instructor/Unity Game Programmer",
            company: "Provincial Government of Camarines Sur",
            contactInfo: "+639062638803",
        });
        await ctx.db.insert("references", {
            name: "Ronaldo Royo Jr.",
            jobTitle: "Network Support Specialist",
            company: "Ateneo de Naga University",
            contactInfo: "+639632283090",
        });
        await ctx.db.insert("references", {
            name: "Dianne Mae P. Fabiano",
            jobTitle: "Associate Software Engineer",
            company: "Accenture Philippines",
            contactInfo: "+639451722389",
        });
    },
});

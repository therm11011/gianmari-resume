export interface Experience {
    id: number
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    responsibilities: string[]
}

export interface Project {
    id: number
    title: string
    slug: string
    description: string
    problem: string
    solution: string
    role?: string
    status?: string
    contributions?: string[]
    outcomes?: string[]
    lessons?: string
    technologies: string[]
    image?: string
    link?: string
    website?: string
    repository?: string
}

export interface SkillGroup {
    category: string
    skills: string[]
}

export interface Certificates {
    id: number
    title: string
    issuingOrganization: string
    issueDate: string
    expirationDate?: string
    image?: string
    credentialId?: string
    credentialUrl?: string
}

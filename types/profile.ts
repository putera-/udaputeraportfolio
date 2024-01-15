interface Portfolio {
    profile: Profile
    skills: SkillCategory[]
    educations: Education[]
    experiences: Experience[]
    projects: Project[]
}

interface Profile {
    firstname: string
    lastname: string
    job: string
    email: string
    phone: string
    dob: string
    avatar?: string
    avatar_md?: string
    avatar_sm?: string
    city: string
    country: string
    bio: string
    web: string
    github: string
    gitlab: string
    linkedin: string
    instagram: string
    facebook: string
    twitter: string
    discord: string,
    readDob: string
    whatsapp: string
}

interface SkillCategory {
    title: string
    skills: Skill[]
}

interface Skill {
    title: string
    svg: string
    categoryId: number
}

interface Education {
    institutionName: string
    startYear: number
    endYear?: number
    major?: string
    degree?: string
}

interface Experience {
    company: string
    location: string
    title: string
    description: string
    startDate: number
    endDate?: number
    readStartDate: string
    readEndDate?: string
}
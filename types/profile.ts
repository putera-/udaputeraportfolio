interface Portfolio {
    profile: Profile,
    skills: SkillCategory[]
}

interface Profile {
    firstname: string
    lastname: string
    email: string
    phone: string
    dob: string
    avatar?: string
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
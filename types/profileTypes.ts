export interface Portfolio {
    profile: Profile
    skills: SkillCategory[]
    educations: Education[]
    experiences: Experience[]
    projects: Project[]
    blogs: Blog[]
}

export interface Profile {
    firstname: string
    lastname: string
    job: string
    email: string
    phone: string
    dob: string
    avatar?: string
    avatar_md?: string
    avatar_sm?: string
    address: string
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
    readDob?: string
    whatsapp?: string
    count_project?: number
    month_of_experience?: number
    year_of_experience?: number
}

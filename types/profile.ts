interface Portfolio {
    profile: Profile,
    skills: SkillCategory[]
}

interface Profile {
    firstname: string
    lastname: string,
    email: string,
    avatar?: string
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
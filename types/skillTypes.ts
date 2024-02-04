interface SkillCategory {
    title: string
    skills?: Skill[]
}

interface Skill {
    title: string
    svg: string
    categoryId: number
    category?: SkillCategory
}

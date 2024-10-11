export interface SkillCategory {
    id: string
    title: string
    skills?: Skill[]
}

export interface Skill {
    id: string
    title: string
    svg: string
    categoryId: string
    category?: SkillCategory
    projects_count: number
}

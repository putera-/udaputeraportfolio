export default defineEventHandler(async (event): Promise<Project[]> => {
    const { apiUrl } = useRuntimeConfig()
    const { data: projects } = await $fetch(apiUrl + '/projects') as { data: Project[] };
    return projects;
})
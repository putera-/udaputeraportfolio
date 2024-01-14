export default defineEventHandler(async (event): Promise<Project> => {
    const { apiUrl } = useRuntimeConfig()
    const id = event.context.params!.id

    const { data: project } = await $fetch(apiUrl + '/project/' + id) as { data: Project };
    return project
})
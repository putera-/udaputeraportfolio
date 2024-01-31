export default defineEventHandler(async (event): Promise<Project> => {
    const { apiUrl } = useRuntimeConfig()
    const id = event.context.params!.id

    return await $fetch(apiUrl + '/project/' + id) as Project;
})

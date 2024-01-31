export default defineEventHandler(async (event): Promise<Blog> => {
    const { apiUrl } = useRuntimeConfig()
    const id = event.context.params!.id

    return await $fetch(apiUrl + '/blog/' + id) as Blog;
})

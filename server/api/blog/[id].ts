export default defineEventHandler(async (event): Promise<Blog> => {
    const { apiUrl } = useRuntimeConfig()
    const id = event.context.params!.id

    const { data: blog } = await $fetch(apiUrl + '/blog/' + id) as { data: Blog };
    return blog
})
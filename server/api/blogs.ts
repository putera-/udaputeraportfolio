export default defineEventHandler(async (event): Promise<BlogPage> => {
    const { apiUrl } = useRuntimeConfig();
    const query = getQuery(event);

    const page = query!.page || 1;
    const perpage = query!.perpage || 9;

    return await $fetch(apiUrl + `/blogs?page=${page}&perpage=${perpage}`) as BlogPage;
})

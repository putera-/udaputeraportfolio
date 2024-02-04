export default defineEventHandler(async (event): Promise<ProjectPage> => {
    const { apiUrl } = useRuntimeConfig();
    const query = getQuery(event);

    const page = query!.page || 1;
    const perpage = query!.perpage || 9;

    try {
        return await $fetch(apiUrl + `/projects?page=${page}&perpage=${perpage}`) as ProjectPage;
    } catch (error) {
        throw error;
    }
});

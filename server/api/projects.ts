export default defineEventHandler(async (event): Promise<DataProject> => {
    const { apiUrl } = useRuntimeConfig();
    const query = getQuery(event);

    const page = query!.page || 1;
    const perpage = query!.perpage || 9;

    return await $fetch(apiUrl + `/projects?page=${page}&perpage=${perpage}`) as DataProject;
})
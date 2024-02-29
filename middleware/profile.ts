export default defineNuxtRouteMiddleware(async (to, from) => {
    const useProfile = useState<Profile>('profile');

    const useShowBlog = useState<Boolean>('show_blog');
    const useShowEdu = useState<Boolean>('show_education');
    const useShowExp = useState<Boolean>('show_experience');
    const useShowSkill = useState<Boolean>('show_skill');
    const useShowProject = useState<Boolean>('show_project');

    if (!useProfile.value) {
        try {
            const getPortFolio = await $fetch('/api/portfolio') as Portfolio;
            const { profile, skills, educations, experiences, projects, blogs } = await Promise.race([getPortFolio, timeoutPromise]) as Portfolio;

            useProfile.value = profile;

            useShowBlog.value = blogs.length > 0 ? true : false;
            useShowEdu.value = educations.length > 0 ? true : false;
            useShowExp.value = experiences.length > 0 ? true : false;
            useShowSkill.value = skills.length > 0 ? true : false;
            useShowProject.value = projects.length > 0 ? true : false;
        } catch (error: any) {
            throw createError({
                statusCode: error.statusCode
            });
        }
    }
});

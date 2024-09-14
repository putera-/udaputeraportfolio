<template>
    <div class="grid grid-cols-10 gap-10 max-md:pt-14">
        <div id="home"
            class="col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3 md:max-h-screen flex flex-col justify-center px-8 relative">
            <IndexProfileCard :profile="profile" />
        </div>
        <div class="col-span-full md:col-span-5 lg:col-span-6 xl:col-span-7">
            <div class="grid grid-cols-12 md:min-h-screen">
                <div
                    class="col-span-full lg:col-start-2 lg:col-span-10 xl:col-start-2 xl:col-span-10 flex flex-col gap-10 max-lg:px-4">
                    <IndexIntro :profile="profile" id="intro" />
                    <!-- <IndexAbout :profile="profile" id="about" /> -->
                    <IndexBlog v-if="useShowBlog" :blogs="blogs" id="blogs" />
                    <IndexEducation v-if="useShowEdu" :educations="educations" id="education" />
                    <img src="/setup-2024.jpeg" alt="Uda Putera Remote Gear 2024"
                        class="rounded-lg hover:scale-110 duration-300">
                    <IndexExperience v-if="useShowExp" :experiences="experiences" id="experience" />
                    <IndexSkill v-if="useShowSkill" :skills="skills" id="skills" />
                    <IndexProject v-if="useShowProject" :projects="projects" id="projects" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'profile'
});
const getPortfolio = async (): Promise<Portfolio> => {
    try {
        return await $fetch('/api/portfolio') as Portfolio;
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        });
    }
}

const useShowBlog = useState<Boolean>('show_blog');
const useShowEdu = useState<Boolean>('show_education');
const useShowExp = useState<Boolean>('show_experience');
const useShowSkill = useState<Boolean>('show_skill');
const useShowProject = useState<Boolean>('show_project');

const { profile, skills, educations, experiences, projects, blogs } = await getPortfolio();

// SEO and META
const { value: useProfile } = useState<Profile>('profile');
const fullname = `${useProfile.firstname} ${useProfile.lastname}`;
const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;

useSeoMeta({
    title: fullname + ' Portfolio',
    description: useProfile.bio,
    ogTitle: fullname + ' Portfolio',
    ogDescription: useProfile.bio,
    ogImage: apiUrl + useProfile.avatar,
    twitterCard: 'summary_large_image',
});
// END: SEO and META
</script>

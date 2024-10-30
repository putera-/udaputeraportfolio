<template>
    <div class="grid grid-cols-10 gap-10 max-md:pt-14">
        <div id="home"
            class="col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3 md:max-h-screen flex flex-col justify-center px-8 relative">
            <LazyIndexProfileCard :profile="portfolio.profile" v-if="portfolio" />
        </div>
        <div class="col-span-full md:col-span-5 lg:col-span-6 xl:col-span-7">
            <div class="grid grid-cols-12 md:min-h-screen">
                <div v-if="portfolio"
                    class="col-span-full lg:col-start-2 lg:col-span-10 xl:col-start-2 xl:col-span-10 flex flex-col gap-10 max-lg:px-4">
                    <LazyIndexIntro :profile="portfolio.profile" id="intro" />
                    <!-- <LazyIndexAbout :profile="profile" id="about" /> -->
                    <LazyIndexBlog v-if="portfolio.blogs.length" :blogs="portfolio.blogs" id="blogs" />
                    <LazyIndexEducation v-if="portfolio.educations.length" :educations="portfolio.educations"
                        id="education" />
                    <img src="/setup-2024.jpeg" alt="Uda Putera Remote Gear 2024"
                        class="rounded-lg hover:scale-110 duration-300">
                    <LazyIndexExperience v-if="portfolio.experiences.length" :experiences="portfolio.experiences"
                        id="experience" />
                    <LazyIndexSkill v-if="portfolio.skills.length" :skills="portfolio.skills" id="skills" />
                    <LazyIndexProject v-if="portfolio.projects" :projects="portfolio.projects" id="projects" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'profile'
});

const PortfolioStore = usePortfolioStore();
const { portfolio, profile } = PortfolioStore;

const { public: { apiUrl } } = useRuntimeConfig();

const fullname = `${profile?.firstname ?? ""} ${profile?.lastname ?? ""}`;

useSeoMeta({
    title: fullname + ' Portfolio',
    description: profile?.bio ?? "",
    ogTitle: fullname + ' Portfolio',
    ogDescription: profile?.bio ?? "",
    ogImage: profile ? (apiUrl + profile.avatar) : "",
    twitterCard: 'summary_large_image',
});
// END: SEO and META
</script>

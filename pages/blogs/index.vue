<template>
    <div class="max-w-7xl mx-auto flex flex-col gap-6 px-4 md:px-6 py-12 md:py-8">
        <IndexHeader subTitle="Blogs" href="/blogs" />
        <template v-if="data">
            <div class="flex max-sm:flex-col justify-between items-end">
                <div class="max-sm:mb-4 text-4xl max-sm:w-full">My Latest <span class="text-accent">Blogs</span>
                </div>
                <div class="join">
                    <button class="join-item btn max-md:btn-sm" @click="page--"
                        :class="{ 'btn-disabled': data.page == 1 }">«</button>
                    <button class="join-item btn max-md:btn-sm font-normal">Page {{ data.page }} of {{ data.total_page
                        }}</button>
                    <button class="join-item btn max-md:btn-sm" @click="page++"
                        :class="{ 'btn-disabled': data.page == data.total_page }">»</button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <NuxtLink :to="`/blogs/${blog.id}`" v-for="blog in blogs" :key="blog.id" class="card p-4">
                    <BlogCard :blog="blog" />
                </NuxtLink>
            </div>
            <div class="flex justify-end">
                <div class="join">
                    <button class="join-item btn max-md:btn-sm" @click="page--"
                        :class="{ 'btn-disabled': data.page == 1 }">«</button>
                    <button class="join-item btn max-md:btn-sm font-normal">Page {{ data.page }} of {{ data.total_page
                        }}</button>
                    <button class="join-item btn max-md:btn-sm" @click="page++"
                        :class="{ 'btn-disabled': data.page == data.total_page }">»</button>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'profile'
});

const page = ref<number>(1);
const perpage = ref<number>(9);
const BlogStore = useBlogStore();
const { data, blogs } = storeToRefs(BlogStore);
BlogStore.getAll('', page.value, perpage.value);

// SEO and META
const PortfolioStore = usePortfolioStore();
const { profile } = PortfolioStore;
const fullname = `${profile?.firstname ?? ""} ${profile?.lastname ?? ""}`;
const config = useRuntimeConfig();
const apiUrl = config.public.apiUrl;

useSeoMeta({
    title: fullname + ' Blogs',
    description: profile?.bio ?? "",
    ogTitle: fullname + ' Blogs',
    ogDescription: profile?.bio ?? "",
    ogImage: profile ? (apiUrl + profile.avatar) : "",
    twitterCard: 'summary_large_image',
});
// END: SEO and META
</script>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        apiUrl: '',
        public: {
            apiUrl: '',
        }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        'nuxt-lucide-icons',
        '@pinia/nuxt',
        '@nuxtjs/device'
    ],
    pinia: {
        storesDirs: ['./stores/**']
    },
    routeRules: {
        '/': { swr: true },
        '/blogs': { swr: true },
        '/blogs/**': { swr: true },
        '/projects': { swr: true },
        '/projects/**/': { swr: true },
        '/admin/**': { ssr: false },
        '/admin/**/**': { ssr: false }
    }
});

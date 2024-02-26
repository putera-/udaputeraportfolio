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
        '/': { ssr: true },
        '/blogs': { ssr: true },
        '/blogs/**': { ssr: true },
        '/projects': { ssr: true },
        '/projects/**/': { ssr: true },
        '/admin/**': { ssr: false },
        '/admin/**/**': { ssr: false }
    }
});

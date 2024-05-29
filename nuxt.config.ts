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
        '@nuxtjs/device',
        "@vite-pwa/nuxt"
    ],
    pinia: {
        storesDirs: ['./stores/**']
    },
    ssr: false,
    pwa: {
        manifest: {
            name: 'Uda Putera',
            short_name: 'UP',
            description: "Portfolio",
            icons: [
                {
                    src: 'icons/icon-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                },
                {
                    src: 'icons/icon-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },
            ]
        },
        workbox: {
            navigateFallback: '/'
        },
        devOptions: {
            enabled: true,
            type: 'module'
        }
    }
});

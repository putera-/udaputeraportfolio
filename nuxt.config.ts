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
            theme_color: '#e9e7e7',
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
                }
            ],
            screenshots: [
                {
                    src: 'screenshot-1.png',
                    sizes: '1920x1080',
                    type: 'image/png',
                    form_factor: 'wide'
                },
                {
                    src: 'screenshot-2.png',
                    sizes: '390x800',
                    type: 'image/png',
                    form_factor: 'narrow'
                }
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

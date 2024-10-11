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
        // "@vite-pwa/nuxt"
    ],
    pinia: {
        storesDirs: ['./stores/**']
    },
    imports: {
        dirs: ["types/*.ts", "types/**/*.ts", "store/*.ts"],
    },
    ssr: false,
    // pwa: {
    //     manifest: {
    //         name: 'Uda Putera',
    //         short_name: 'UP',
    //         description: "Portfolio",
    //         theme_color: '#e9e7e7',
    //         icons: [
    //             {
    //                 src: 'icons/icon-512x512.png',
    //                 sizes: '512x512',
    //                 type: 'image/png'
    //             },
    //             {
    //                 src: 'icons/icon-192x192.png',
    //                 sizes: '192x192',
    //                 type: 'image/png'
    //             }
    //         ],
    //         screenshots: [
    //             {
    //                 src: 'screenshot-1.png',
    //                 sizes: '1920x1080',
    //                 type: 'image/png',
    //                 form_factor: 'wide'
    //             },
    //             {
    //                 src: 'screenshot-2.png',
    //                 sizes: '390x800',
    //                 type: 'image/png',
    //                 form_factor: 'narrow'
    //             }
    //         ]
    //     },
    // workbox: {
    //     navigateFallback: '/',
    //     globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    //     runtimeCaching: [
    //         {
    //             urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
    //             handler: 'CacheFirst',
    //             options: {
    //                 cacheName: 'google-fonts-cache',
    //                 expiration: {
    //                     maxEntries: 10,
    //                     maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
    //                 },
    //                 cacheableResponse: {
    //                     statuses: [0, 200]
    //                 }
    //             }
    //         }
    //     ]
    // },
    //     devOptions: {
    //         enabled: true,
    //         type: 'module'
    //     }
    // },

    compatibilityDate: '2024-10-11'
});

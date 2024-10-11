/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': 'Inter, sans-serif'
            },
            colors: {
                darkmode: {
                    50: "state(color-darkmode-50)",
                    100: "state(color-darkmode-100)",
                    200: "state(color-darkmode-200)",
                    300: "state(color-darkmode-300)",
                    400: "state(color-darkmode-400)",
                    500: "state(color-darkmode-500)",
                    600: "state(color-darkmode-600)",
                    700: "state(color-darkmode-700)",
                    800: "state(color-darkmode-800)",
                    900: "state(color-darkmode-900)",
                },
            },
        },
    },
    plugins: [
        require("daisyui")
    ],
    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
        ],
    }
}


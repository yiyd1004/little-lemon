/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "little-lemon-green": "#495E57",
                "little-lemon-yellow": "#F4CE14",
                "highlight-grey": "#EDEFEE",
                "highligh-price": "#EE9972",
            },
            fontFamily: {
                "Markazi-Text": ["Markazi Text", "serif"],
                Karla: ["Karla", "sans-serif"],
            },
            screens: {
                navbar: "1060px",
                highlight: "960px",
                "highlight-card-container": "1260px",
                testimonial: "960px",
                "testimonial-card-container": "1586px",
                about: "1200px",
                footer: "1060px",
                mobile: "900px",
            },
            backgroundImage: {
                "food-image": "url('/src/assets/restauranfood.jpg')",
                "chef-image": "url('/src/assets/restaurant-chef.jpg')",
            },
            textShadow: {
                sm: "0 1px 2px var(--tw-shadow-color)",
                DEFAULT: "0 2px 4px var(--tw-shadow-color)",
                lg: "0 8px 16px var(--tw-shadow-color)",
            },
            scale: {
                flip: "-1",
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "text-shadow": (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme("textShadow") }
            );
        }),
    ],
};

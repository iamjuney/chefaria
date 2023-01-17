const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            action: "#892B2C",
            primary: "#E5C99F",
            secondary: "#CF6D41",
            supporting: "#B27B6A",
            dark: "#38171D",
        },
        extend: {
            fontFamily: {
                sans: ["Karla", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                "hero-bg": "url('/src/assets/bg/Food Vector Transparent.png')",
                "comic-dots-transparent":
                    "url('/src/assets/bg/Comic Dots Transparent.png')",
            },
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};

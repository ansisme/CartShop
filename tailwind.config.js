/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'standardBg': '#F5F5F5',
                'Addbtn': '#7A7AFF',
                'iconsColors': '#ff8e8e',
                'delete': '#d00000',
            }

        },
    },
    plugins: [],
}
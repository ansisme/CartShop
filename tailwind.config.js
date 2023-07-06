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
                'iconsColors': '#ff7777',
                'delete': '#d00000',
                'blueBlack': '#110f1a',
                'gradient': 'linear-gradient(to right, rgb(30, 58, 138), rgb(30, 58, 138), rgb(239, 68, 68))',
            }

        },
    },
    plugins: [],
}
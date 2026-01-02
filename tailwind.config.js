/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-blue': '#0A84FF',
                'neon-green': '#30D158',
                'neon-red': '#FF453A',
                'neon-yellow': '#FFD60A',
                'dark-gray': '#1C1C1E',
            },
            fontFamily: {
                'sf': ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #0A84FF, 0 0 10px #0A84FF, 0 0 15px #0A84FF' },
                    '100%': { boxShadow: '0 0 10px #0A84FF, 0 0 20px #0A84FF, 0 0 30px #0A84FF, 0 0 40px #0A84FF' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [],
}





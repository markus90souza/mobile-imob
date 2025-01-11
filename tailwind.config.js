/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik_400Regular', 'sans-serif'],
        'rubik-medium': ['Rubik_500Medium', 'sans-serif'],
        'rubik-semibold': ['Rubik_600SemiBold', 'sans-serif'],
        'rubik-bold': ['Rubik_700Bold', 'sans-serif'],
        'rubik-extrabold': ['Rubik_800ExtraBold', 'sans-serif'],
        'rubik-black': ['Rubik_900Black', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#0061FF0A',
          200: '#0061FF1A',
          300: '#0061FF',
        },
        accent: {
          100: '#FBFBFD',
        },
        black: {
          DEFAULT: '#000000',
          100: '#8C8E98',
          200: '#666876',
          300: '#191D31',
        },
        danger: '#F75555',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        'criancavrcortada': "url('../assets/png/criancavrcortada.png')",
        'criancavr': "url('../assets/png/criancavr.png')",
        'square': "url('../assets/svg/square.svg')",
      },
      colors: {
        antonBackgroundcolor: "#CFCFCF",
        antonGrey: "#585858",
        antonSecondary: "#1A2121",
        antonTextWhite: "#E5F5F4",
        antonTextBlack: "#111111",
        antonOrange: "#FF5C00",
        antonSalmon: {
          darksalmon: "#FF6554",
          lightsalmon: "#FFB2A9",
        },
      },
      fontFamily: {
        'audio': ['var(--audiowide)', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s cubic-bezier(0.5, 0, 1, 1) infinite',
        'spin-slow': 'spin 11s linear infinite',
      },
    },
  },
  plugins: [],
}
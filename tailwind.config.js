module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      // colors: {
      //   purple: '#482262',
      //   pink: '#EA2E5E'
      // },
    },
  },
  plugins: [ 
    require('@tailwindcss/typography')
  ],
};

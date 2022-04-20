module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#45A4DC',
        secondary: '#BD1A2C',
        gray: {
          100: '#EEEEEE',
          200: '#B5B5B6',
          300: '#707070',
        },
        black: '#000000',
        white: '#ffffff',
      },
      fontSize: {
        '14px': '0.875rem',   // 14px
        '15px': '0.9375rem',  // 15px
        '16px': '1rem',       // 16px
        '18px': '1.125rem',   // 18px
        '20px': '1.25rem',    // 20px
      },
      borderRadius: {
        '5': '0.3125rem',
        '9': '0.5625rem',
      }
    },
  },
  plugins: [],
}
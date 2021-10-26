module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    extend: {
      lineHeight: {
        '12': '3rem',
      },
      fontFamily: {
        Noto: ['Noto', 'Arial', 'sans-sarif']
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'gbsite': '#F3ECE6',
        'comunidade': '#54402F1A'
      }),
      textColor: {
        'myblue': '#0A386A',
        'bluelight': '#3A5E85',
        'textcolor': '#395C83',
        'corpo': '#192839',
        'subtitle': '#5F7A98'
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'myblue': '#3e81c2',
      }),
   },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
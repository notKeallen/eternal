/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        barTop: 'rgba(0, 0, 0, 0.97)',
        loginColor: '#83C000',
        bgSignUp: 'rgba(255, 255, 255, 0.15)',
        bgBannerColor: '#001c04;'
      },
      borderRadius: {
        buttonRadius: '10px',
      },
      spacing:{
        '10px': '10px',
        '20px': '20px',
        '50px': '50px',
        '20%': '20%',
        '10%': '10%',
      },
      backgroundImage: {
        'header-image': "url('/img/eternal-slots-home-page-banner-instant-withdrawals-desktop-1d1c92b0.webp')",
        'header-mobile': "url(/img/eternal-slots-home-page-banner-instant-withdrawals-mobile-e1926515.webp)",
        'banner-image': "url('/img/eternal-slots-home-page-banner-2-desk-instant-withdrawals-1610fe0d.webp')",
        'banner-mobile': "url(/img/eternal-slots-home-page-banner-2-mob-instant-withdrawals-7e5d8e03.webp)",
        'button-image': "url('/img/arrow-down.svg')"
      },
      scale: {
        '120': '1.2',
      },
    },
  },
  plugins: [],
}

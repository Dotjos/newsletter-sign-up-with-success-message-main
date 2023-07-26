/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      DarkSlateGrey: "hsl(234, 29%, 20%)",
      CharcoalGrey: "hsl(235, 18%, 26%)",
      Grey: "hsl(231, 7%, 60%)",
      White: "hsl(0, 0%, 100%)",
      Tomato: "hsl(4, 100%, 67%)",
      errRed: "#fecaca",
      bordRed: "#ef4444",
      btnHove: "#FF527B",
      btnGrad: "#ef4444",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      listStyleImage: {
        checkmark: "url(/assets/images/icon-list.svg)",
      },
      backgroundImage: {
        desktop: "url(/assets/images/illustration-sign-up-desktop.svg)",
        mobile: "url(/assets/images/illustration-sign-up-mobile.svg)",
      },
    },
  },
  plugins: [],
};

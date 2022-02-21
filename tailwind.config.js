module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      screens: {
        'desktop': '1440px',
        // => @media (min-width: 1440px) { ... },
        'sm': '600px',
        // => @media (min-width: 600px) { ... }
      },
      colors: {
        lightBlue: "#99C2FF",
        darkBlue: "#032343",
        lightGrey: "#26262B",
        darkGrey: "#1E1F21",
        dirtywhite: "#6D6D6D",
        customBlack: "#171717",
        purple: "#5E55FF",
      },
      fontFamily: {
        body: ["Space Grotesk"],
      },
      keyframes: {
        slidein: {
             '0%': { transform: 'translateX(-10%)' },
             '100%': { transform: 'translateX(0%)' },
        },
        slideout:{
            '0%': { transform: 'translateX(10%)' },
             '100%': { transform: 'translateX(0%)' },
        },
        zoom: {
             '0%': { transform: 'scale(0)' },
             '100%': { transform: 'scale(1)' },
        }
      },
      animation:{
        slidein: 'slidein .08s ease-in-out',
        slideout: 'slideout .08s ease-in-out',
        zoom: 'zoom .15s ease-in-out',
      },
      boxShadow:{
        '3xl':'0 0 0 10000px rgba(0,0,0,0.75)',
      }
    },
  },
  plugins: [],
};

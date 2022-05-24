module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#f8faff",
        secondary: "#f0c808",
        primary: "#fdfdfd",
        darkred: "#dd1c1a",
        darkorange: {
          50: "#ffb600",
          100: "#ffaa00",
          200: "#ff8500",
          300: "#fc260a",
          400: "#ff5722",
        },
        lightgreen: {
          50: "#b5e48c",
          100: "#007f5f",
          200: "#31AF5E",
          300: "#2a914e",
        },
        googleblue: "#4285F4",
        'livelyred-primary': "#5D001E",
        'livelyred-accent': "#E3E2DF",
        'livelyred-card': "#E3AFBC",
        'livelyred-bright': "#9A1750",
        'livelyred-light': "#EE4C7C",
        'vie-black': "#181927"
      },
      fontFamily: {
    },
    },
    fontFamily: {
      'nova-flat': '"Nova Flat"',
      'poppins': 'Barlow'
    }
  },
  plugins: [],
};

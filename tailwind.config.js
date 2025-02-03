export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      perspective: {
        1000: "1000px",
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        // Boje za različita stanja kartica
        card: {
          new: "#22c55e", // zelena za nove kartice
          learning: "#f59e0b", // narančasta za kartice u učenju
          review: "#3b82f6", // plava za kartice za ponavljanje
        },
      },

      spacing: {
        card: "1.25rem", // Standardni padding za kartice
        "card-lg": "1.875rem", // Veći padding za veće kartice
      },

      // Prilagođene sjene koje će dati našim karticama 3D izgled
      boxShadow: {
        card: "0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)",
        "card-hover": "0 4px 6px rgba(0,0,0,0.1), 0 12px 24px rgba(0,0,0,0.1)",
      },

      // Prilagođene animacije za okretanje kartica
      keyframes: {
        "card-flip": {
          "0%, 100%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
        },
      },
      animation: {
        flip: "card-flip 0.6s ease-in-out",
      },

      // Prilagođeni border radiusi
      borderRadius: {
        card: "1rem",
        "card-lg": "1.5rem",
      },
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".card-base": {
          "@apply bg-white dark:bg-gray-800 rounded-card shadow-card transition-all duration-200":
            {},
          "&:hover": {
            "@apply shadow-card-hover": {},
          },
        },
        ".input-base": {
          "@apply w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent":
            {},
        },
        ".button-primary": {
          "@apply px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 active:bg-primary-700 transition-colors duration-200":
            {},
        },
      });
    },
  ],
};

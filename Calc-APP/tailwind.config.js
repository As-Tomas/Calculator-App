/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)'
        },
      },
      backgroundColor: {
        skin: {
          'main-background': 'var(--bg-color-main)',
          'button-color': 'var(--bg-color-button)',
          'button-color-equal': 'var(--bg-color-button-equal)',
          'button-color-hover': 'var(--bg-color-button-hover)',
          'keypad-background' : 'var(--bg-color-keypad)',
          'display-background' : 'var(--bg-color-display)'
        },        
      },
      borderColor: {
        skin: {
          'border-color': 'var(--bg-color-border)',
          'border-color-hover': 'var(--bg-color-border-hover)',
        },
      },
    },
  },
  plugins: [],
}


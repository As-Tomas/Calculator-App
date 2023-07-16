/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          'text-color-keypad' : 'var(--color-text-keypad)',
          'text-color-upper' : 'var(--color-text-upper)'
        },
      },
      backgroundColor: {
        skin: {
          'main-background': 'var(--bg-color-main)',
          'button-color': 'var(--bg-color-button)',
          'button-color-hover': 'var(--bg-color-button-hover)',
          'keypad-background' : 'var(--bg-color-keypad)',
          'display-background' : 'var(--bg-color-display)',
          'button-color-del' : 'var(--bg-color-button-del)',
          'button-color-del-hover' : 'var(--bg-color-button-del-hover)',
          'button-color-equal' : 'var(--bg-color-button-equal)',
          'button-color-equal-hover' : 'var(--bg-color-button-equal-hover)',        
          
        },        
      },
      borderColor: {
        skin: {
          'border-color': 'var(--bg-color-border)',
          'border-color-hover': 'var(--bg-color-border-hover)',
          'button-color-del-border' : 'var(--bg-color-button-del-border)',
          'button-color-del-border-hover' : 'var(--bg-color-button-del-border-hover)',
          'button-color-equal-border' : 'var(--bg-color-button-equal-border)',
          'button-color-equal-border-hover' : 'var(--bg-color-button-equal-border-hover)',
        },
      },
    },
  },
  plugins: [],
}


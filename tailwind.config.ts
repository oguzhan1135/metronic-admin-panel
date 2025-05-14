import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '6.5': '25px',
      },
      width: {
        '70': '280px'
      },
      gap: {
        '2.5': '10px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'h-50-54-700': ['54px', { lineHeight: '54px', letterSpacing: '-2px', fontWeight: '700' }],
        'h-44-56-700': ['56px', { lineHeight: '56px', letterSpacing: '-3px', fontWeight: '700' }],
        'h-38-38-600': ['38px', { lineHeight: '38px', letterSpacing: '0px', fontWeight: '600' }],
        'h-34-42-700': ['42px', { lineHeight: '34px', letterSpacing: '-2px', fontWeight: '700' }],
        'h-34-34-600': ['34px', { lineHeight: '34px', letterSpacing: '-2px', fontWeight: '600' }],
        'h-30-30-600': ['30px', { lineHeight: '30px', letterSpacing: '0px', fontWeight: '600' }],
        'h-26-26-600': ['26px', { lineHeight: '30px', letterSpacing: '0px', fontWeight: '600' }],
        'h-24-24-600': ['24px', { lineHeight: '24px', letterSpacing: '-1px', fontWeight: '600' }],
        'h-22-38-500': ['22px', { lineHeight: '38px', letterSpacing: '-1px', fontWeight: '500' }],
        'h-22-22-600': ['22px', { lineHeight: '22px', letterSpacing: '-1px', fontWeight: '600' }],
        'b-20-30-500': ['20px', { lineHeight: '30px', letterSpacing: '0px', fontWeight: '500' }],
        'b-20-20-500': ['20px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '500' }],
        'b-20-20-600': ['20px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '600' }],
        'b-18-30-500': ['18px', { lineHeight: '30px', letterSpacing: '0px', fontWeight: '500' }],
        'b-18-25-300': ['18px', { lineHeight: '25px', letterSpacing: '0px', fontWeight: '300' }],
        'b-18-25-500': ['18px', { lineHeight: '25px', letterSpacing: '0px', fontWeight: '500' }],
        'b-18-25-600': ['18px', { lineHeight: '25px', letterSpacing: '0px', fontWeight: '600' }],
        'b-18-18-600': ['18px', { lineHeight: '18px', letterSpacing: '-1px', fontWeight: '600' }],
        'b-18-18-500': ['18px', { lineHeight: '18px', letterSpacing: '-1px', fontWeight: '500' }],
        'b-16-25-500': ['16px', { lineHeight: '25px', letterSpacing: '0px', fontWeight: '500' }],
        'b-16-25-600': ['16px', { lineHeight: '25px', letterSpacing: '0px', fontWeight: '600' }],
        'b-16-16-400': ['16px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '400' }],
        'b-16-16-500': ['16px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '500' }],
        'b-16-16-600': ['16px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '600' }],
        'b-15-24-400': ['15px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '400' }],
        'b-15-24-500': ['15px', { lineHeight: '24px', letterSpacing: '0px', fontWeight: '500' }],
        'b-15-16-400': ['15px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '400' }],
        'b-15-16-500': ['15px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '500' }],
        'b-15-16-600': ['15px', { lineHeight: '16px', letterSpacing: '0px', fontWeight: '600' }],
        'b-14-22-400': ['14px', { lineHeight: '22px', letterSpacing: '0px', fontWeight: '400' }],
        'b-14-22-500': ['14px', { lineHeight: '22px', letterSpacing: '0px', fontWeight: '500' }],
        'b-14-14-400': ['14px', { lineHeight: '14px', letterSpacing: '0px', fontWeight: '400' }],
        'b-14-14-500': ['14px', { lineHeight: '14px', letterSpacing: '0px', fontWeight: '500' }],
        'b-14-14-600': ['14px', { lineHeight: '14px', letterSpacing: '0px', fontWeight: '600' }],
        'b-14-14-700': ['14px', { lineHeight: '14px', letterSpacing: '0px', fontWeight: '700' }],
        'b-13-20-400': ['13px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '400' }],
        'b-13-20-500': ['13px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '500' }],
        'b-13-14-400': ['13px', { lineHeight: '14x', letterSpacing: '0px', fontWeight: '400' }],
        'b-13-14-500': ['13px', { lineHeight: '14x', letterSpacing: '0px', fontWeight: '500' }],
        'b-13-14-600': ['13px', { lineHeight: '14px', letterSpacing: '0px', fontWeight: '600' }],
        'b-12-12-400': ['12px', { lineHeight: '12px', letterSpacing: '0px', fontWeight: '400' }],
        'b-12-12-500': ['12px', { lineHeight: '12px', letterSpacing: '0px', fontWeight: '500' }],
        'b-12-12-600': ['12px', { lineHeight: '12px', letterSpacing: '0px', fontWeight: '600' }],
        'b-12-12-700': ['12px', { lineHeight: '12px', letterSpacing: '0px', fontWeight: '700' }],
        'b-11-12-400': ['11px', { lineHeight: '12px', letterSpacing: '0px', fontWeight: '400' }],
        'b-11-12-500': ['11px', { lineHeight: '12px', letterSpacing: '0px', fontWeight: '500' }],
        'b-11-12-600': ['11px', { lineHeight: '12px', letterSpacing: '0px', fontWeight: '600' }],
        'b-10-10-400': ['10px', { lineHeight: '10px', letterSpacing: '-3', fontWeight: '400' }],
        'b-10-10-500': ['10px', { lineHeight: '10px', letterSpacing: '-3', fontWeight: '500' }],
        'b-10-10-600': ['10px', { lineHeight: '10px', letterSpacing: '-3', fontWeight: '600' }],
        'b-9-10-400': ['9px', { lineHeight: '10px', letterSpacing: '-3', fontWeight: '400' }],
        'b-9-10-500': ['9px', { lineHeight: '10px', letterSpacing: '-3', fontWeight: '500' }],
        'b-9-10-600': ['9px', { lineHeight: '10px', letterSpacing: '-3', fontWeight: '600' }],
      },
      borderColor: {
        DEFAULT: 'var(--color-gray-300)',
      },
      colors: {
        primary: 'var(--color-primary)',
        'primary-active': 'var(--color-primary-active)',
        'primary-clarity': 'var(--color-primary-clarity)',
        'primary-light': 'var(--color-primary-light)',

        success: 'var(--color-success)',
        'success-active': 'var(--color-success-active)',
        'success-clarity': 'var(--color-success-clarity)',
        'success-light': 'var(--color-success-light)',

        danger: 'var(--color-danger)',
        'danger-active': 'var(--color-danger-active)',
        'danger-clarity': 'var(--color-danger-clarity)',
        'danger-light': 'var(--color-danger-light)',

        info: 'var(--color-info)',
        'info-active': 'var(--color-info-active)',
        'info-clarity': 'var(--color-info-clarity)',
        'info-light': 'var(--color-info-light)',

        warning: 'var(--color-warning)',
        'warning-active': 'var(--color-warning-active)',
        'warning-clarity': 'var(--color-warning-clarity)',
        'warning-light': 'var(--color-warning-light)',

        'light-active': 'var(--color-light-active)',

        'coal-100': "#15171C",
        'coal-200': "#13141A",
        'coal-300': "#111217",
        'coal-400': "#0F1014",
        'coal-500': "#0D0E12",
        'coal-600': "#0B0C10",
        'coal-clarity': "#18191F",

        'gray-100': 'var(--color-gray-100)',
        'gray-200': 'var(--color-gray-200)',
        'gray-300': 'var(--color-gray-300)',
        'gray-400': 'var(--color-gray-400)',
        'gray-500': 'var(--color-gray-500)',
        'gray-600': 'var(--color-gray-600)',
        'gray-700': 'var(--color-gray-700)',
        'gray-800': 'var(--color-gray-800)',
        'gray-900': 'var(--color-gray-900)',
      },
      backgroundImage: {
        'map': "url('/src/assets/icon/background-map.svg')",
        'mask': "url('/src/assets/icon/mask.svg')",
        'author-bg-1': "url('/src/assets/icon/author-bg-1.svg')",
        'author-bg-2': "url('/src/assets/icon/author-bg-2.svg')",
        'author-bg-3': "url('/src/assets/icon/author-bg-3.svg')",
        'author-bg-4': "url('/src/assets/icon/author-bg-4.svg')",
        'layered-bg': "url('/src/assets/icon/layared-bg.svg')",
        'authantication-bg': "url('/src/assets/icon/authentication-bg.svg')",
        'branded-bg': "url('/src/assets/icon/branded-bg.svg')"

      },

    },
  },
  plugins: [],
};

export default config;

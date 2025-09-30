/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // GANTI 'tailwindcss' dengan '@tailwindcss/postcss'
    "@tailwindcss/postcss": {}, // PERUBAHAN INI
    autoprefixer: {},
  },
};

export default config;

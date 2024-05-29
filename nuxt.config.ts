// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  modules: ["@sidebase/nuxt-auth", "@nuxt/image"],
  auth: {
    provider: { type: "authjs" },
    globalAppMiddleware: true,
    origin: process.env.AUTH_ORIGIN,
  },
});

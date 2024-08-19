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
  modules: [
    "@sidebase/nuxt-auth",
    "@nuxt/image",
    "@pinia/nuxt",
    "nuxt-file-storage",
  ],
  fileStorage: {
    mount: "/Users/georgwindhaber/source/schoubl-stack/upload",
  },
  // auth: {
  //   provider: { type: "authjs" },
  //   globalAppMiddleware: true,
  //   origin: process.env.AUTH_ORIGIN ?? "https://schoubl-stack.pages.dev",
  // },
});

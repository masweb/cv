// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    app: {
        baseURL:  '/cv/',
        buildAssetsDir: 'assets'
    },

    devtools: { enabled: false },
    modules: [
        '@vueuse/nuxt',
    ],
    css: [
        'basscss/css/basscss.css',
        '@/css/ress.css',
        '@/css/cv.scss',
    ],
})

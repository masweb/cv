// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
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

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    ssr: true,

    // app
    app: {
        head: {
            title: 'Nuxt 3',
            titleTemplate: '%s - Nuxt 3',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Nuxt 3',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },

    css: [
        'virtual:windi.css',
        'virtual:windi-devtools',
        '~/assets/scss/style.scss',
    ],
    modules: [
        'nuxt-windicss',
    ],
    components: true,
    plugins:[],
    buildModules: [
        'nuxt-windicss',
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: ''
                }
            }
        }
    },

    windicss: {
        analyze: {
            analysis: {
                interpretUtilities: false,
            },
            server: {
                port: 4000,
                open: false,
            },
        },
        scan: true,
    },

    // content
    content: {
        documentDriven: true,
        markdown: {
            mdc: true,
        },
        highlight: {
            theme: 'github-dark',
        },
    },
})

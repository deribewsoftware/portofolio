// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
 
  devtools: { enabled: true },
  modules:["@nuxt/ui", "nuxt-icon",'@vueuse/motion/nuxt','@sidebase/nuxt-pdf','dayjs-nuxt'],
  dayjs: {
    locales: ['en'],
    defaultLocale: 'en',
    plugins: ['relativeTime', 'advancedFormat'],
},
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    },
    jwtAccessToken:process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
    jwtRefreshToken:process.env.JWT_REFRESH_TOKEN_SECRET_KEY
  }
})

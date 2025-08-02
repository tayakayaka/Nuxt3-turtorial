// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true } ,

  components: {
    global:true,
    dirs:["~/components"],
  },

  //setting for enviroment variable
  runtimeConfig:{
    //for server-side
    apiSecret:process.env.NUXT_API_SECRET || "default-secret",
    //for frontend-side
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "xxxxxxxx",  
    }
  }
})

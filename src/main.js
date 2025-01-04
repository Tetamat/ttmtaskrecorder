import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { firebaseApp } from '@/firebase'
import { VueFire, VueFireAuth } from 'vuefire'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth()
    ]
})

app.mount('#app')

// router.beforeEach((to, from, next) => {
//     if (to.name === 'Login' && !auth.currentUser) next()
//     else if (to.name === 'Home' && !auth.currentUser) next({ name: 'Login' })
//     else next()
// })

// export default app
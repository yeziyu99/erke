import Vue from "vue";
import Router from "vue-router";
import page from "@/views/index.vue";
import layout from "@/views/common/layout.vue";
import home from "@/views/home/index.vue";
import music from "@/views/music/index.vue";
import photo from "@/views/photo/index.vue";
import support from "@/views/support/index.vue";
import about from "@/views/about/index.vue";
import erke from "@/views/erke/index.vue";
import song from "@/views/song.vue";



Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
            path: "/",
            component: page,
            children: [{
                    path: "",
                    redirect: "/home"
                },
                {
                    path: "home",
                    component: layout,
                    children: [{
                            path: "/home",
                            name: "home",
                            component: home
                        },
                        {
                            path: "/music",
                            name: "music",
                            component: music
                        },
                        {
                            path: "/photo",
                            name: "photo",
                            component: photo
                        },
                        {
                            path: "/support",
                            name: "support",
                            component: support
                        },
                        {
                            path: "/about",
                            name: "about",
                            component: about
                        },
                        {
                            path: "/erke",
                            name: "erke",
                            component: erke
                        },
                    ]
                }
            ]
        },
        {
            path: "/song",
            name: "song",
            component: song
        },
        {
            path: "/home",
            name: "home",
            component: home
        },
    ]
});
// router.beforeEach((to, from, next) => {
//   if (to.path == '/login') {
//     next();
//   } else {
//     const userInfoArry = JSON.parse(sessionStorage.getItem('userInfoArry'))
//     if (!userInfoArry) {
//       next('/login')
//     } else {
//       next()
//     }
//   }

// });
export default router;
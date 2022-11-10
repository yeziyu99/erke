import Vue from "vue";
import Router from "vue-router";
import page from "@/views/index.vue";
import layout from "@/views/common/layout.vue";
import home from "@/views/home/index.vue";
import market from "@/views/market/index.vue";
import support from "@/views/support/index.vue";
import about from "@/views/about/index.vue";
import invest from "@/views/invest/index.vue";
import detail from "@/views/detail/index.vue";
import comingsoon from "@/views/comingSoon/ComingSoon.vue";




Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: "/",
      component: page,
      children: [{
        path: "",
        redirect: "/comingsoon"
      },
      {
        path: "home",
        component: layout,
        children: [
          {
            path: "/home",
            name: "home",
            component: home
          },
          {
            path: "/market",
            name: "market",
            component: market
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
            path: "/detail",
            name: "detail",
            component: detail
          },
        ]
      }]
    },
    {
      path: "/invest",
      name: "invest",
      component: invest
    },
    {
      path: "/comingsoon",
      name: "comingsoon",
      component: comingsoon
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
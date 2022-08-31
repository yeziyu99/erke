import Vue from "vue";
import Router from "vue-router";
import page from "@/views/index.vue";
import login from "@/views/login/index.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: page,
      children: [{
        path: "",
        redirect: "/login"
      },]
    },
    {
      path: "/login",
      name: "login",
      component: login
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next();
  } else {
    const userInfoArry = JSON.parse(sessionStorage.getItem('userInfoArry'))
    if (!userInfoArry) {
      next('/login')
    } else {
      next()
    }
  }

});
export default router;
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [{
      path: "/",
      name: "login",
      component: HomeView,
   },
   {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login.vue")
   }
];

const router = new VueRouter({
   routes,
});

router.beforeEach(function (to, from, next) {
   if (to.path === '/login') {
      next()
   } else {
      let token = localStorage.getItem('token')
      if (token) return next()
      if (!token) return next({
         path: '/login'
      })
   }
})

export default router;
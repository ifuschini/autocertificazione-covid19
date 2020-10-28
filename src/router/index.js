import Vue from "vue";
import Router from "vue-router";
import container from "../containers/Container"
import autocertificazione from "../views/autocertificazione"

Vue.use(Router);
const router = new Router({
    mode: "hash", // https://router.vuejs.org/api/#mode
    linkActiveClass: "active",
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: "/",
            redirect: "/autocertificazione",
            name: "Home",
            component: container,
            children: [
                {
                    path: "/autocertificazione",
                    name: "Autocerticazone",
                    component: autocertificazione,
                },
            ],
        }, 
    /*    {
            path: "/pages",
            redirect: "/pages/404",
            name: "pages",
            component: {
                render(c) {
                    return c("router-view");
                },
            },
            meta: { requiresAuth: false },
            children: [
/*                {
                    path: "404",
                    name: "Page404",
                    component: page404,
                },
                {
                    path: "/pages/login",
                    name: "Login",
                    component: login,
                    meta: { requiresAuth: false },
                },
                {
                    path: "/pages/welcome",
                    name: "welcome",
                    component: welcome,
                    meta: { requiresAuth: false },
                }, 
                { 
                    path: "/pages/generateQRCode",
                    name: "generateqrcode",
                    component: generateqrcode,
                    meta: { requiresAuth: false },
                },
     
            ],
        }, */
        {
            path: "*",
            redirect: "/pages/404",
        },
    ],
});

export default router;

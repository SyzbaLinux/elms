import { createRouter, createWebHistory } from "vue-router";
import Welcome from "./views/Welcome.vue";
import Register from "./views/Register.vue";
import ResetPassword from "./views/ResetPassword.vue";
export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "",
            component: Welcome,
            name: "login",
        },

        {
            path: "/register",
            component: Register,
            name: "register",
        },

        {
            path: "/reset-password",
            component: ResetPassword,
            name: "resetpassword",
        },

        // Catch-all redirect to home page
        {
            path: "/:pathMatch(.*)*",
            redirect: "/",
        },
    ],
});

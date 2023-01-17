import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import RecipesView from "../views/RecipesView.vue";
import SpecialtyView from "../views/SpecialtyView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/categories",
            name: "categories",
            component: CategoriesView,
        },
        {
            path: "/recipes",
            name: "recipes",
            component: RecipesView,
        },
        {
            path: "/specialty",
            name: "specialty",
            component: SpecialtyView,
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
        },
    ],
});

export default router;

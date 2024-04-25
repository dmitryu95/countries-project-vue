import { createRouter, createWebHistory } from "vue-router";
import CountryView from "@/views/CountryView.vue";
import CountriesView from "@/views/CountriesView.vue";

const routes = [
    {
        path: '/',
        component: CountriesView,
        name: 'CountriesView',
        props: true,
    },
    {
        path: '/country/:name',
        component: CountryView,
        name: 'CountryView',
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

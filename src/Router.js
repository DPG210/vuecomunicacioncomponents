import { createWebHistory, createRouter } from "vue-router";
import PadreDeportes from './components/PadreDeportes.vue'
import ComicsComponent from "./components/ComicsComponent.vue";
import NumerosPadre from "./components/NumerosPadre.vue";
import NumeroDoble from "./components/NumeroDoble.vue";
import SumaCheckbox from "./components/SumaCheckbox.vue";

const myRoutes = [
    { path: "/", component: PadreDeportes },
    { path: "/comics", component: ComicsComponent },
    { path: "/numeros", component: NumerosPadre },
    { path: "/suma", component: SumaCheckbox },
    { path: "/doble/:numero?", component: NumeroDoble }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContinentesView from "../views/ContinentesView.vue";
import LoginView from "../views/LoginView.vue";
import CadastroView from "../views/CadastroView.vue";
import PaisesView from "../views/PaisesView.vue";
import LigasView from "../views/LigasView.vue";
import JogadoresView from "../views/JogadoresView.vue";
import DetalhesView from "../views/DetalhesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/continentes",
      name: "continentes",
      component: ContinentesView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: CadastroView,
    },
    {
      path: "/paises/:nome",
      name: "paises",
      component: PaisesView,
      props: true,
    },
    {
      path: "/ligas/:nome",
      name: "ligas",
      component: LigasView,
      props: true,
    },
    {
      path: "/jogadores/:nome",
      name: "jogadores",
      component: JogadoresView,
      props: true,
    },
    {
      path: "/detalhes/:nome",
      name: "detalhes",
      component: DetalhesView,
      props: true,
    },
  ],
});

export default router;

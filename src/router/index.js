import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContinentesView from "../views/ContinentesView.vue";
import LoginView from "../views/LoginView.vue";
import CadastroView from "../views/CadastroView.vue";
import PaisesView from "../views/PaisesView.vue";
import LigasView from "../views/LigasView.vue";
import JogadoresView from "../views/JogadoresView.vue";
import DetalhesView from "../views/DetalhesView.vue";
import { auth } from '../plugins/firebase';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    
    { path:'',
      meta: {
        requiresAuth: true
      },
      children:[
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
      ]
    }
    
  ],
});


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
  })

export default router;

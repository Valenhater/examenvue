import {createRouter, createWebHistory} from 'vue-router';
import HomeCubos from './components/HomeCubos.vue'; 
import DetalleCubo from './components/DetalleCubo.vue';
import ComentariosCubos from './components/ComentariosCubos.vue';
import CuboDetallehome from './components/CuboDetallehome.vue';
import LoginCubos from './components/LoginCubos.vue';
import UsuarioCubos from './components/UsuarioCubos.vue';
import ComprasUsuario from './components/ComprasUsuario.vue';

const myRoutes = [
  {
    path: '/',
    component: HomeCubos,
  },
  {
    path: '/detalle/:marca',
    component: DetalleCubo,
  },
  {
    path: '/comentario/:id',
    component: ComentariosCubos,
  },
  {
    path: '/detallecubo/:id',
    component: CuboDetallehome,
  },
  {
    path: '/login',
    component: LoginCubos,
  },
  {
    path: '/user',
    component: UsuarioCubos,
  },
  {
    path: '/compras',
    component: ComprasUsuario,
  },
 
];
const router = createRouter ({
  history: createWebHistory (),
  routes: myRoutes,
});

export default router;
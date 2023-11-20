<template>
  <div>
    <h1>Usuario</h1>
    <ul>
        <li>
            Nombre:
        {{ usuario.nombre }}
      </li>
      <li>
        Email:
        {{ usuario.email }}
      </li>
    </ul>
    <a class="btn btn-success"><router-link class="dropdown-item" :to="'/compras'">Compras Usuario</router-link></a>
  </div>
</template>
<script>
import ServiceCubos from '@/services/ServiceCubos';
const servicio = new ServiceCubos();
export default {
  name: "UsuarioCubos",
  mounted() {
    servicio.getUsuario().then((response) => {
      this.usuario = response.data;
    });
  },
  data() {
    return {
      usuario: [],
    };
  },
};
</script>

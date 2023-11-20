<template>
  <div v-for="cubo in cubos" :key="cubo">
    <div class="card" style="width: 48rem">
      <img class="card-img-top" :src="cubo.imagen" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ cubo.nombre }}</h5>
        <p class="card-text">{{ cubo.modelo }}</p>
        <p class="card-text">
          Precio: {{ cubo.precio }} , valoracion {{ cubo.valoracion }}
        </p>
        <a class="btn btn-success"><router-link class="dropdown-item" :to="'/detallecubo/'+ cubo.idCubo">Detalle</router-link></a>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";

var servicio = new ServiceCubos();
export default {
  name: "HomeCubos",

  mounted() {
    servicio.getCubos().then((result) => {
      this.cubos = result;
    });
  },
  data() {
    return {
      cubos: [],
    };
  },
};
</script>
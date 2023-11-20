<template>
  <div>
    <h1>Detalle de cubo segun marca</h1>
    <div v-for="cubo in cubos" :key="cubo">
      <div class="card" style="width: 48rem">
        <h5 class="card-title">CUBOS DE LA MARCA: {{ cubo.marca }}</h5>
        <img class="card-img-top" :src="cubo.imagen" alt="Card image cap" />
        <div class="card-body">
          <p class="card-text">{{ cubo.nombre }} {{ cubo.modelo }}</p>
          <p class="card-text">
            Precio: {{ cubo.precio }} , valoracion: {{ cubo.valoracion }}
          </p>
        </div>
        <a class="btn btn-success"><router-link class="dropdown-item" :to="'/comentario/'+ cubo.idCubo">Comentarios</router-link></a>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";

var servicio = new ServiceCubos();
export default {
  name: "DetalleCubo",
  mounted() {
    this.mostrarCubos();
  },
  methods: {
    mostrarCubos() {
      var marca = this.$route.params.marca;
      servicio.getModelo(marca).then((result) => {
        this.cubos = result;
      });
    },
  },
  data() {
    return {
      cubos: [],
    };
  },
};
</script>
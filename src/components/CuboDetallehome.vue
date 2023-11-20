<template>
  <div>
    <h1>Detalle de cubo segun marca</h1>
    <div>
      <div class="card" style="width: 48rem">
        <h5 class="card-title">CUBOS DE LA MARCA: {{ cubos.marca }}</h5>
        <img class="card-img-top" :src="cubos.imagen" alt="Card image cap" />
        <div class="card-body">
          <p class="card-text">{{ cubos.nombre }} {{ cubos.modelo }}</p>
          <p class="card-text">
            Precio: {{ cubos.precio }} , valoracion: {{ cubos.valoracion }}
          </p>
        </div>
        <a class="btn btn-success"
          ><router-link class="dropdown-item" :to="'/'">Volver</router-link></a
        >
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";

var servicio = new ServiceCubos();
export default {
  name: "CuboDetalleHome",
  mounted() {
    this.mostrarCubos();
  },
  methods: {
    mostrarCubos() {
      var idcubo = parseInt(this.$route.params.id);
      servicio.getCuboId(idcubo).then((result) => {
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
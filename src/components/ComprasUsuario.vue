<template>
  <div v-for="compra in compras" :key="compra">
    <div class="card" style="width: 48rem">
      <div class="card-body">
        <h5 class="card-title">ID Cubo: {{ compra.idCubo }}</h5>
        <p class="card-text">ID Pedido: {{ compra.idPedido }}</p>
        <p class="card-text">ID Usuario: {{ compra.idUsuario }}</p>
        <p class="card-text">Fecha pedido: {{ compra.fechaPedido }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
const servicio = new ServiceCubos();
export default {
  name: "ComprasUsuario",
  mounted() {
    servicio.getComprasUsuario().then((response) => {
      this.compras = response.data;
    });
  },
  data() {
    return {
      compras: [],
    };
  },
};
</script>
<template>
  <div>
    <h1 style="color:green">Comentarios</h1>
    <div v-for="comentario in comentarios" :key="comentario" class="border">
      <h1>Comentario del usuario {{comentario.idComentario}}</h1>
      <p>{{ comentario.comentario }}</p>
      <p>Fecha del comentario: {{ comentario.fechaComentario }}</p>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "@/services/ServiceCubos";

var servicio = new ServiceCubos();
export default {
  name: "ComentariosCubos",
  mounted() {
    var id = this.$route.params.id;
    servicio.getComentarios(id).then((result) => {
      this.comentarios = result;
    });
  },
  data() {
    return {
      comentarios: [],
    };
  },
};
</script>

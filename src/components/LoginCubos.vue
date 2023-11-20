<template>
  <div>
    <h1>Login</h1>
    <form
      v-on:submit.prevent="realizarForm()"
      style="width: 500px; margin: 0 auto"
    >
      <label class="form-label">User</label>
      <input type="text" class="form-control" v-model="name" />
      <label class="form-label">Password</label>
      <input type="text" class="form-control" v-model="passwd" />
      <button class="btn btn-success">Login</button>
    </form>
  </div>
</template>

<script>
import Global from "./../Global";
import ServiceCubos from '@/services/ServiceCubos';
const servicio = new ServiceCubos();

export default {
  name: "LoginCubos",
  data() {
    return {
      name: "",
      passwd: "",
      usuario: { email: "", password: "" },
    };
  },
  methods: {
    realizarForm() {
      this.usuario = { email: this.name, password: this.passwd };
      console.log(this.usuario);
      servicio.autorizarLogin(this.usuario).then((response) => {
        Global.autoriza = response.data.response;
        console.log(Global.autoriza)
        console.log(response.data.response);
        
      });
    },
  },
};
</script>
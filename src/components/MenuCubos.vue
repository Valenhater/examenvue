<template>
  <div class="fixed-top text-start" style="max-width: inherit; margin: auto">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Cubos</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <button
                class="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marcas
              </button>
              <ul class="dropdown-menu">
                <li v-for="marca in marcas" :key="marca">
                  <router-link class="dropdown-item" :to="'/detalle/'+ marca">{{marca}}</router-link>
                </li>
              </ul>
              
            </li>
            <li class="nav-item dropdown">
              <button
                class="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seguridad
              </button>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" :to="'/login'">Login</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" :to="'/user'">Usuario</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" :to="'/'">Ver perfil</router-link>
                </li>
              </ul>
              
            </li>
          </ul> 
            
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';

var servicio = new ServiceCubos();

export default {
  name: "MenuSeries",
  mounted(){
    servicio.getMarcas().then((result)=>{
      this.marcas = result
    })
  },
  data(){
    return{
      marcas:[]
    }
  }

};
</script>
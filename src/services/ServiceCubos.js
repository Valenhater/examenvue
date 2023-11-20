import Global from "./../Global";
import axios from "axios";

export default class ServiceCubos {
  getCubos() {
    return new Promise(function (resolve) {
      var request = "api/Cubos";
      var url = Global.urlApiCubos + request;
      var cubos = [];

      axios.get(url).then((response) => {
        cubos = response.data;
        resolve(cubos);
      });
    });
  }
  getMarcas() {
    return new Promise(function (resolve) {
      var request = "api/Cubos/Marcas";
      var url = Global.urlApiCubos + request;
      var marcas = [];

      axios.get(url).then((response) => {
        marcas = response.data;
        resolve(marcas);
      });
    });
  }
  getModelo(marca) {
    return new Promise(function (resolve) {
      var request = "/api/Cubos/CubosMarca/" + marca;
      var url = Global.urlApiCubos + request;
      var cubos = [];

      axios.get(url).then((response) => {
        cubos = response.data;
        resolve(cubos);
      });
    });
  }
  getComentarios(id) {
    return new Promise(function (resolve) {
      var request = "/api/ComentariosCubo/GetComentariosCubo/" + id;
      var url = Global.urlApiCubos + request;
      var comentarios = [];

      axios.get(url).then((response) => {
        comentarios = response.data;
        resolve(comentarios);
      });
    });
  }
  getCuboId(id) {
    return new Promise(function (resolve) {
      var request = "api/Cubos/" +id;
      var url = Global.urlApiCubos + request;
      var cubos = [];

      axios.get(url).then((response) => {
        cubos = response.data;
        resolve(cubos);
      });
    });
  }
  autorizarLogin (usuario) {
    return new Promise (function (resolve) {
      var request = 'api/Manage/Login';
      var url = Global.urlApiCubos + request;
      axios.post (url, usuario).then (response => {
        resolve (response);
        console.log(response)
      });
    });
  }

  getUsuario () {
    return new Promise (function (resolve) {
      var request = 'api/Manage/PerfilUsuario';
      var url = Global.urlApiCubos + request;
      var token = Global.autoriza;
      axios.get(url, {headers:{'Authorization':'bearer '+token}}).then(response => {
        console.log(response)
        resolve(response);
      })
    });
  }
  getComprasUsuario(){
    return new Promise (function (resolve) {
      var request = 'api/Compra/ComprasUsuario';
      var url = Global.urlApiCubos + request;
      var token = Global.autoriza;
      axios.get(url, {headers:{'Authorization':'bearer '+token}}).then(response => {
        console.log(response)
        resolve(response);
      })
    });
    
  }
}

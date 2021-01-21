<template>
  <v-app>
    <h1>Crear orden</h1>
    <v-select
      :items="clientes"
      filled
      label="Filled style"
    ></v-select>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            Descripcion
          </th>
          <th class="text-left">
            Precio Unidad
          </th>
          <th class="text-left">
            Existencia
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in productos"
          :key="item.Id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ item.precioUnidad }}</td>
          <td>{{ item.existencia }}</td>
          <td>
            <v-text-field
            label="cantidad"
            placeholder="Cantidad"
            required
          ></v-text-field>
          </td>
          <td>
            <v-btn
              color="primary"
              elevation="9"
              small
              @click="addToCart(item.id)"
              >
              Anadir a la orden
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-app>
</template>
<script>
  import axios from 'axios'
  export default {  
    data: () => ({
        productos: [],
        clientes: [],
        cart: [],
        cartAmount(){
          return this.cart.length
        },
    }),
    mounted(){
        axios.get("https://localhost:5001/api/cliente")
        .then(response => {
            this.clientes = response.data
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.get("https://localhost:5001/api/producto")
        .then(response => {
            this.productos = response.data
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods:{
      addToCart(selected){
        console.log(selected)
        this.cart.push(selected)
        console.log(this.cart)
      }
    }
  }
</script>
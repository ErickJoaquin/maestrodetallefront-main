<template>

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
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  import axios from 'axios'
  export default {  
    data: () => ({
        productos: [],
        cart: [],
        cartAmount(){
          return this.cart.length
        },
    }),
    mounted(){
        axios.get("https://localhost:5001/api/producto")
        .then(response => {
            this.productos = response.data
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods:{
     
      
      
    }
  }
</script>
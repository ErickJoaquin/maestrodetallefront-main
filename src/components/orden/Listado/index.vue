<template>

  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            Fecha Creacion
          </th>
          <th class="text-left">
            Cliente
          </th>
          <th class="text-left">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in ordenes"
          :key="item.Id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.fechaCreacion }}</td>
          <td>{{ item.clientId }}</td>
          <td>1000</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  import axios from 'axios'
  export default {  
    data: () => ({
        ordenes: [],
        cart: [],
        cartAmount(){
          return this.cart.length
        },
    }),
    mounted(){
        axios.get("https://localhost:5001/api/orden")
        .then(response => {
            this.ordenes = response.data
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
<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Id
          </th>
          <th class="text-left">
            Nombre
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in clientes"
          :key="item.Id"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.nombre }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        clientes: []
      }
          
    },
    mounted(){
        axios.get("https://localhost:5001/api/cliente")
        .then(response => {
            this.clientes = response.data
            console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  }
</script>
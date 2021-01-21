<template>
  
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <h3>Crear Producto</h3>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>


    <v-btn
      color="success"
      class="mr-4"
      @click="Guardar"
    >
      Guardar
    </v-btn>
  </v-form>
</template>
<script>
    import axios from 'axios'
    export default {
        data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
        ],
        }),

        methods: {
            Guardar () {
                let config = {
                headers: {
                    "content-type": "application/json",
                }
                }
                axios.post('https://localhost:5001/api/cliente', {
                    nombre: this.name,
                },config)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
        },
    }
</script>
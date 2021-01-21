<template>
  
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <h3>Crear Producto</h3>
    <v-text-field
      v-model="descripcion"
      :counter="10"
      :rules="descripcionRules"
      label="Descripcion"
      required
    ></v-text-field>
     <v-text-field
      v-model="precioUnidad"
      :counter="10"
      :rules="precioRules"
      label="Precio Unidad"
      required
    ></v-text-field>
     <v-text-field
      v-model="existencia"
      :counter="10"
      :rules="existenciaRules"
      label="Existencia"
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
        descripcion: '',
        precioUnidad: '',
        existencia: '',
        descripcionRules: [
            v => !!v || 'Descripcion is required',
        ],
        precioRules: [
            v => !!v || 'Descripcion is required',
        ],
        existenciaRules: [
            v => !!v || 'Descripcion is required',
        ],
        }),

        methods: {
            Guardar () {
                let config = {
                headers: {
                    "content-type": "application/json",
                }
                }
                axios.post('https://localhost:5001/api/producto', {
                    descripcion: this.descripcion,
                    precioUnidad: this.precioUnidad,
                    existencia: this.existencia,
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
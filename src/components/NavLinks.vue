<template>
  <v-card
    class="mx-auto"
    height="400"
    width="256"
  >
    <v-navigation-drawer
      class="deep-purple accent-4"
      dark
      permanent
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Crear Productos', icon: 'mdi-view-dashboard', link: 'productos'},
          { title: 'Listar Productos', icon: 'mdi-view-dashboard', link: 'listarproductos'},
          { title: 'Crear Clientes', icon: 'mdi-view-dashboard', link: 'clientes'},
          { title: 'Listar Clientes', icon: 'mdi-view-dashboard', link: 'listarclientes'},
          { title: 'Crear Orden', icon: 'mdi-view-dashboard', link: 'orden'},
          { title: 'Listar Ordenes', icon: 'mdi-view-dashboard', link: 'listarordenes'},
          
        ],
      }
    },
  }
</script>
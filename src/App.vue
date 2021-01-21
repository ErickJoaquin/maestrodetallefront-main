<template>     
  <v-app>
    <b-row>
      <b-col cols="4"><NavLinks/></b-col>  
      <b-col cols="6"><router-view></router-view></b-col>
    </b-row>
  </v-app>   
</template>    
<script>  
import NavLinks from './components/NavLinks.vue' 
export default {    
name: 'app',    
components: {      
NavLinks,
}  
}  
</script>    
<style>  
#app {    
font-family: 'Avenir', Helvetica, Arial, sans-serif;    
-webkit-font-smoothing: antialiased;    
-moz-osx-font-smoothing: grayscale;    
text-align: center;    
color: #2c3e50;    
margin-top: 60px;  
}  
.v-application--wrap{
  min-height: 0 !important;
}
</style>
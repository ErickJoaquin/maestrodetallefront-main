<template>
 
    <div>
      <header>
       <vs-breadcrumb
       align="left"
      :color="colorx"
      :items="items"
      separator=">"
    ></vs-breadcrumb>
      </header>
            
    </div>
  
</template>

<script>
export default {
  data: ()=>({
    colorx:'#00816E',
    items:[
      {
        title: 'Panel',
        disabled: true
      },
      {
        title: 'Inicio',
        url: '/'
      },
      {
          title: 'Ajustes',
          active: true
      }
    ]
  })
}
</script>

<style>

</style>

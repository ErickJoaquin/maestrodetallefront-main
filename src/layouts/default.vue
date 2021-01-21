<template>
  <div>

  <!---Navigation Bar-->
   <div class="navbar">
    <img src="https://avatars2.githubusercontent.com/u/31676496?s=460&v=4" alt="Avatar" class="avatar">
    <img class=logo src="/twins logo.png"/>
   </div>

  <!---SideBar-->
  <div class="sidenav">
    <hr class="sidebar">
    <NavLink/>
  </div>

<!---Page Container-->
	<nuxt class="main-container" />
  
  </div>

</template>

<script>
import NavLink from '~/components/Navlink.vue'
export default {
  components:{
    NavLink
  }
  
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #F6F7FB;
  
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.main-container{
  margin-left: 230px; /* Same as the width of the sidebar */
  margin-top: 45px;
  padding: 10px 10px 0px 10px;
}


/* Navbar */
.navbar {
  overflow: hidden;
  background-color: #00816E;
  box-shadow: 0px 7px 10px 0px rgba(0,0,0,0.16);
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 55px;
}
.avatar {
  vertical-align: middle;
  position: absolute;
  left: 80%;
  font-family: Montserrat light;
  font-size: 14px;
  color: #fff;
  
}
img.logo {
  position: fixed;
  z-index: 1;
  margin-top: 8px;
  margin-left: 49px;
  width: 138px;
  filter: drop-shadow(0px 3px 2px rgba(0,0,0,0.20));
}
img.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
}


/* Sidebar menu */
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 240px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */ 
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #fff; /* white */
  box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.16);
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 55px;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  background: #e8f5fd;
  color: #3bccf6;
}
hr.sidebar {
  border: 1px solid rgba(0,0,0,0.05);
  margin: auto;
  margin-top: 48px;
  width: 180px;
  box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.15);
}


</style>

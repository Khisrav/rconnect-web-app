<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

body {
  background-color: rgba(0, 0, 0, .05);
}
  #app {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
}
.text-center {
  text-align: center;
}
.flex-center {
  display: flex;
}
.btn {
  border-width: 2px;
  font-weight: bolder;
}
.montserrat {
  font-family: 'Montserrat', sans-serif;
}
</style>

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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

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
</style>

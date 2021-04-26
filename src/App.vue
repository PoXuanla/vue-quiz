<template>
  <div id="app">
    <div class="nav bg-dark-pink">
      <div class="ml-1">
        <router-link to="/">答題小測驗</router-link>
      </div>
      <div class="mr-1">newGame</div>
    </div>
    <div id="main" class="w-70 m-auto mt-1 border-radius overflow-hidden">
      <router-view />
    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style lang="scss">
@import "@/scss/all.scss";
//ubuntu
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");
//Noto Sans Tc
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Ubuntu:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
  border: 0;
}
#app {
  font-family: "Ubuntu", "Noto Sans TC", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
.nav {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 700px) {
  #main {
    width: 100%;
    height: 90vh;
    margin-top: 0;
    border-radius: 0;
    background-color: $pink;
    overflow: auto;
  }
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |

      <router-link to="/menu">Menu</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  background-color: aquamarine;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: yellowgreen;
  background-color: antiquewhite;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: seashell;
}

#nav a.router-link-exact-active {
  color: #957c75;
}
</style>

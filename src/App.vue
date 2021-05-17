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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f0e38;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #544122;
}

#nav a.router-link-exact-active {
  color: #957c75;
}
</style>

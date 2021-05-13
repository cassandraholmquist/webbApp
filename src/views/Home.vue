<template>
  <div class="home">
    <Welcome place="Le Plaza" />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src

import Welcome from "@/components/Welcome.vue";

export default {
  name: "Home",
  components: {
    Welcome,
  },
};
</script>


<style scoped>
</style>


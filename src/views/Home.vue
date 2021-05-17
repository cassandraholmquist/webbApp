<template>
  <div class="home">
    <Welcome place="Le Plaza" />
    <!-- <img alt="App logo" src="../assets/icon@192px.png" /> -->
    <!-- funkar ej med v-bind -->
    <img alt="App logo" :src="logo" />
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  name: "Home",
  data() {
    return {
      logo: "../assets/icon@192px.png",
    };
  },
  components: {
    Welcome,
  },
};
</script>


<style scoped>
img {
  padding: 40px;
}
.home {
  text-align: center;
}
</style>
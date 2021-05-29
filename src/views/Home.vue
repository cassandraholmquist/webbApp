<template>
  <div class="home">
    <Welcome place="La Plaza" />
    <img alt="App logo" :src="logo" />
  </div>
</template>

<script>
import Welcome from "@/components/Welcome.vue";
import icon192px from "../assets/icon@192px.png";

export default {
  name: "Home",
  data() {
    return {
      logo: icon192px,
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
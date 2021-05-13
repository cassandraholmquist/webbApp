<template>
  <div class="menu">
    <h1>Get this party started!</h1>
    <Drinks />
  </div>
</template>

<script>
import Drinks from "@/components/Drinks.vue";

export default {
  name: "Menu",
  components: {
    Drinks,
  },
};
</script>

<style lang="sass" scoped>
</style>

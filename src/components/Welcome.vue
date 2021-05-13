<template>
  <div>
    <b-icon icon="gem" animation="fade" style="width: 3rem; height: 3rem" />
    <h1>Welcome to {{ place }}</h1>
  </div>
</template>

<script>
export default {
  name: "Welcome",

  props: {
    place: String,
  },
};
</script>

<style scoped>
</style>
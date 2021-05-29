<template>
  <div class="ageValidator">
    <input type="text" placeholder="enter your age" v-model="age" />

    <b-button variant="secondary" pill @click="checkAge">See menu</b-button>
  </div>
</template>

<script>
export default {
  name: "AgeValidator",
  data() {
    return {
      age: null,
      isMajor: Boolean,
    };
  },
  methods: {
    checkAge() {
      if (this.age < 18) {
        this.isMajor = false;
        this.$emit("age-validated", this.isMajor);
      } else {
        this.isMajor = true;
        this.$emit("age-validated", this.isMajor);
      }
    },
  },
};
</script>

<style scoped>
</style>


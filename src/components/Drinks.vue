<template>
  <div>
    <h1>.. but first..</h1>
    <AgeValidator @age-validated="onAgeValidated" />
    <ul v-if="isMajor">
      <li v-for="drink in drinks" :key="drink.idDrink">
        {{ drink.strDrink }}
      </li>
    </ul>
    <ul v-else>
      <li v-for="mocktail in mocktails" :key="mocktail.idDrink">
        {{ mocktail.strDrink }}
      </li>
    </ul>
  </div>
</template>

<script>
import AgeValidator from "@/components/AgeValidator.vue";

export default {
  name: "Drinks",
  data() {
    return {
      drinks: null,
      mocktails: null,
      isMajor: null,
    };
  },
  methods: {
    getDrinks() {
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
      ).then((response) =>
        response.json().then((result) => {
          this.drinks = result.drinks;
        })
      );
    },
    getMocktails() {
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      ).then((response) =>
        response.json().then((result) => {
          this.mocktails = result.drinks;
        })
      );
    },
    onAgeValidated(isMajor) {
      this.isMajor = isMajor;
      if (isMajor) {
        this.getDrinks();
      } else {
        this.getMocktails();
      }
    },
  },
  components: {
    AgeValidator,
  },
};
</script>

<style scoped>
h1 {
  padding: 20px;
}
</style>
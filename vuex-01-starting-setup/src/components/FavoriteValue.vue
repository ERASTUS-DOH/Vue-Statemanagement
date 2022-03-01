<template>
  <h3>{{ counter }}</h3>
  <p> We do more</p>
</template>

<script>
export default {
  name: "FavoriteValue",
  computed: {
    counter(){
      // return this.$store.getters.normalizedCounter;
      return this.$store.getters['number/normalizedCounter'];
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <button @click="addOne">Add 1</button>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ChangeCounter",
  methods: {
    // addOne(){
    //   this.$store.dispatch('increment');
    // }
    ...mapActions('number',{
      addOne: 'increment',
      increase: 'increase',
    })
  }
}
</script>

<style scoped>

</style>
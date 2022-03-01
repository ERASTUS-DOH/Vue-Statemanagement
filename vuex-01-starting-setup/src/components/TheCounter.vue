<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TheCounter",
  computed: {
    // stateCounter(){
    //   //return this.$store.getters.finalCounter;
    //  return ...mapGetters(['finalCounter']);
    // }
    ...mapGetters('number',['finalCounter'])
  }
}
</script>

<style scoped>

</style>
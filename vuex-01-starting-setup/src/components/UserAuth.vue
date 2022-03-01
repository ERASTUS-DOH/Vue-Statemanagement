<template>
  <button v-if="!authenticate" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "UserAuth",
  computed: {
    ...mapGetters(['authenticate'])
  },
  methods: {
    login(){
      this.$store.dispatch('login');
    },
    logout(){
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped>

</style>
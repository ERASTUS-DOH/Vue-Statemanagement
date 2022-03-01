<template>
  <base-container title="Vuex" v-if="isAuthenticated">
    <the-counter></the-counter>
    <favorite-value> </favorite-value>
    <change-counter></change-counter>
    <button @click="add10">Add 10</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "@/components/TheCounter";
import ChangeCounter from "@/components/ChangeCounter";
import FavoriteValue from "@/components/FavoriteValue";
import UserAuth from "@/components/UserAuth";

export default {
  components: {
    UserAuth,
    FavoriteValue,
    ChangeCounter,
    TheCounter,
    BaseContainer,
  },
  methods: {
    add10(){
      this.$store.dispatch({
        type: 'number/increase',
        value: 10,
      });
    },

  },
  computed: {
    isAuthenticated(){
     return  this.$store.getters.authenticate;
    }
  }

};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
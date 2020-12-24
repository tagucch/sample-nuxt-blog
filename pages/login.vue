<template>
  <div class="container">
    <h1 class="title">login</h1>
    <input id="email" type="email" placeholder="email" v-model="email">
    <input id="password" type="password" placeholder="password" v-model="password">
    <button class="submit" @click="signin()">Submit</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  data() {
    return {
      email: '' as string,
      password: '' as string
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    async signin() {
      // @ts-ignore
      const isSuccessLogin = await this.login({ email: this.email, password: this.password })
      if (isSuccessLogin) {
        this.$router.push('/')
      }
    }
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

input {
  border: solid 1px black;
}
</style>

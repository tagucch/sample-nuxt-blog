<template>
  <div class="container">
    <div>
      <h1 class="title">sample-nuxt-blog</h1>
      <input v-model="article.title" placeholder="title" />
      <textarea v-model="article.body" placeholder="body"></textarea>
      <button class="submit" @click="submit()">Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data() {
    return {
      article: {
        title: '' as string,
        body: '' as string,
      },
    }
  },
  methods: {
    async submit() {
      const res = await axios.post('http://localhost:3000/article', {
        // @ts-ignore
        article: this.article,
      })
    },
  },
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

input,
textarea {
  border: solid 1px black;
}
</style>

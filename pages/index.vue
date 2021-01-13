<template>
  <div class="container">
    <div>
      <h1 class="title">sample-nuxt-blog</h1>
      <div>
        <button><NuxtLink to="/articles/new">新規作成</NuxtLink></button>
      </div>
      <template v-for="(article, i) in articles">
        <div class="articleContainer" :key="i">
          <div class="articleTitle">
            <NuxtLink :to="`/articles/${article.id}`">
              {{ article.title }}
            </NuxtLink>
          </div>
          <div class="articleBody">
            {{ article.summary }}
          </div>
        </div>
      </template>
      <template v-if="isSuccessLogin">
        <div>
          <button class="logout" @click="signout()">ログアウト</button>
        </div>
      </template>
      <template v-else>
        <div>
          <button class="login"><NuxtLink to="/login">ログイン</NuxtLink></button>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import axios from 'axios'

export default Vue.extend({
  async asyncData() {
    const res = await axios.get('http://localhost:3000/article')
    return {
      articles: res.data.articles,
    }
  },
  computed: {
    ...mapState('auth', ['isSuccessLogin', 'token'])
  },
  methods: {
    ...mapActions('auth', ['logout']),
    async signout() {
      // @ts-ignore
      const success = await this.logout()
      if (success) {
        this.$router.push('/logout')
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

.articleContainer {
  border: solid 1px black;
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

input, button {
  border: solid 1px black;
}
</style>

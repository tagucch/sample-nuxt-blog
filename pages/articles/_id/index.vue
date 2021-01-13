<template>
  <div class="container">
    <div>
      <h1 class="title">{{ article.title }}</h1>
    </div>
    <div>
      id: {{ article.id }}
    </div>
    <div>
      {{ article.body }}
    </div>
    <div>
      author: {{ article.author.name }}
    </div>
    <div>
      <p>作成日: {{ article.createdAt }}</p>
      <p>更新日: {{ article.updatedAt }}</p>
    </div>
    <template v-if="member.member && article.author.name === member.member.name">
      <NuxtLink :to="`/articles/${article.id}/edit`">編集</NuxtLink>
      <NuxtLink :to="`/articles/${article.id}/delete`">削除</NuxtLink>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  async asyncData({ params }) {
    const res = await axios.get(`http://localhost:3000/article/${params.id}`)
    return { article: res.data.article }
  },
  data() {
    return {
      article: {
        id: 0 as number,
        title: '' as string,
        body: '' as string,
        author: {
          memberId: 0 as number,
          name: '' as string,
        },
        createdAt: '' as string,
        updatedAt: '' as string,
      }
    }
  },
  computed: {
    ...mapState('auth', ['member'])
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
  flex-direction: column;
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

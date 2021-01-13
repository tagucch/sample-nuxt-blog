export const state = {
  articles: []
}

export const mutations = {
  // @ts-ignore
  getArticles(state, articles) {
    state.articles = articles
  },
}

export const actions = {
  // @ts-ignore
  async saveArticle({}, { article }) {
    // @ts-ignore
    const res = await this.$axios.post('/article', { article })
    if(res.status === 204) {
      return true
    }
    return false
  },

  // @ts-ignore
  async getArticle({}, { id }) {
    // @ts-ignore
    const res = await this.$axios.get(`/article/${id}`)
    if(res.ok) {
      return res.data
    }
  },

  // @ts-ignore
  async updateArticle({}, { article }) {
    // @ts-ignore
    const res = await this.$axios.put('/article', { article })
    if(res.status === 204) {
      return true
    }
    return false
  },

  // @ts-ignore
  async deleteArticle({}, { id }) {
    // @ts-ignore
    const res = await this.$axios.delete(`/article/${id}`)
    if(res.status === 204) {
      return true
    }
    return false
  }
}

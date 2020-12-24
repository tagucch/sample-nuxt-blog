import axios from 'axios'

export const state = {
  token: null,
  member: {
    email: '',
    password: ''
  },
  isSuccessLogin: false
}

export const getters = {
  // @ts-ignore
  token: state => state.token
}

export const mutations = {
  // @ts-ignore
  saveToken(state, token) {
    if (token) {
      state.token = token.token
    }
  },
  // @ts-ignore
  saveMember(state, member) {
    if (member) {
      state.member = member
    }
  },
  // @ts-ignore
  removeMember(state) {
    state.member = {
      email: '',
      password: ''
    }
  },
  // @ts-ignore
  rememberLogin(state) {
    state.isSuccessLogin = true
  },
  // @ts-ignore
  removeLogin(state) {
    state.isSuccessLogin = false
  },
}

export const actions = {
  // @ts-ignore
  async login({ commit }, { email, password }) {
    const res = await axios.post('http://localhost:3000/login', {
      email,
      password
    })
    const { token, member, isSuccessLogin } = res.data
    if (isSuccessLogin) {
      // @ts-ignore
      commit('saveToken', { token })
      // @ts-ignore
      commit('saveMember', { member })
      // @ts-ignore
      commit('rememberLogin')
      return isSuccessLogin
    }
    return isSuccessLogin
  },

  // @ts-ignore
  async logout({ commit, state }) {
    const res = await axios.put('http://localhost:3000/logout', {
      headers: { 'auth': state.token }
    })
    const success = res.data
    if (success) {
      commit('removeMember')
      commit('removeLogin')
      return success
    }
    return success
  }
}

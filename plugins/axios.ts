// @ts-ignore
export default function({ $axios, store }) {
  $axios.onRequest(() => {
    if(!store.state.auth.token) return
    $axios.setHeader('auth', store.state.auth.token)
  })
}

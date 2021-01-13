// @ts-ignore
export default function ({ store, redirect }) {
  if(!store.state.auth.isSuccessLogin) {
    return redirect('/login')
  }
}

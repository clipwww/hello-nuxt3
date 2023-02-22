import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  // const userInfo = useSupabaseUser()
  // const client = useSupabaseAuthClient()
  const userInfo = ref(null)

  const isLoggedIn = computed(() => !!userInfo.value)


  async function login() {
    // const { error } = await client.auth.signInWithOAuth({ provider: 'google' })
    // if (error) {
    //   return alert('Something went wrong !')
    // }
  }

  function logout() {
    // client.auth.signOut()
  }

  return {
    userInfo,
    isLoggedIn,

    login,
    logout,
  }
})

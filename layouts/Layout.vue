<template>
  <div>
    <Navbar />
      <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  computed: {
    loginState () {
        return this.$store.state.login.isLoggedIn
        // Or return basket.getters.fruitsCount
        // (depends on your design decisions).
    }
  },
  mounted() {
    if(this.loginState == true) {
      setTimeout(() => {
          this.$store.commit("login/signOut")
      }, 600000)
    }
  }
}
</script>
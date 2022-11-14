<template >
    <div v-if="loginState == false" class="w-full h-full">
        <loading/>
    </div>
    <div v-else id="pageAdmin" class="lg:flex bg-[#F3F2F3] w-full h-full z-0">
        <side-bar />
        <div class="container w-full mx-auto px-4 py-4 overflow-scroll">
            <Header />
            <Nuxt />
        </div>
    </div>
</template>
<script>
import SideBar from '../components/admin/SideBar.vue'
import Header from '../components/admin/Header.vue'
import loading from '../components/loading.vue'
export default {
    name: "Admin",
    components: {
        SideBar,
        Header,
        loading
    },
    computed: {
        loginState () {
            return this.$store.state.login.isLoggedIn
            // Or return basket.getters.fruitsCount
            // (depends on your design decisions).
        }
    },
    mounted() {
        if(this.loginState == false) {
            this.$router.replace({ path: "/dashboard-admin" })
        }
    }
}
</script>
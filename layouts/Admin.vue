<template>
    <div id="pageAdmin" class="lg:flex bg-[#F3F2F3] w-full h-full z-0">
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
export default {
    components: {
        SideBar,
        Header,
    },
    mounted() {
        const login = this.$store.state.login.isLoggedIn
        if (login == false) {
            this.$swal({
                title: 'Anda Belum Login!',
                text: 'Silahkan login terlebih dahulu',
                icon: 'warning',
                confirmButtonText: 'Login'
            }).then(res => {
                if(res.isConfirmed) {
                    this.$router.replace({ path: '/dashboard-admin/signin' })
                }
            })
        }
    },
}
</script>
<template>
<div id="pageAdmin" class="lg:flex bg-[#F3F2F3] w-full h-screen">
    <side-bar />
    <div class="container w-11/12 md:w-full mx-auto">
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
        Header
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
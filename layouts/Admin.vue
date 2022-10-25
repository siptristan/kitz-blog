<template>
<div id="pageAdmin" class="flex">
    <side-bar />
    <div class="container px-4 py-4">
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
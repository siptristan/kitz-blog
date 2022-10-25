<template>
<div id="pageAdmin" class="flex">
    <side-bar />
    <div class="container px-4 py-4">
        <Header />
        <!-- <nuxt/> -->
    </div>
</div>
</template>
<script>
import { SideBar, Header } from '../index.js'
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
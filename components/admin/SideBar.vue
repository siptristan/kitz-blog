<template>
<div class="sidebar h-full px-4 py-4">
    <!-- <button class="btn btn-primary float-left" @click="closeSideNav">
        <h5>X</h5>
    </button> -->
    <!-- <div class="w-full h-fit flex justify-between mb-4">
        <div class="w-1/2 p-1 rounded-full h-fit">
            <img src="../../assets/images/logo2.png" class="w-full h-fit" alt="">
        </div>
    </div> -->
    <img src="../../assets/images/logo2.png" class="w-3/4 h-fit mb-4" alt="">
    <p class="font-semibold text-white">Dashboard</p>
    <div class="flex mt-4">
        <img src="../../assets/images/user.svg" class="mr-2" alt="">
        <h3 class="text-white text-sm">Profile</h3>
    </div>
    <div class="flex mt-4">
        <img src="../../assets/images/home.svg" class="mr-2" alt="">
        <h3 class="text-white text-sm">Create Blog</h3>
    </div>
    <div class="flex mt-4">
        <img src="../../assets/images/edit.svg" class="mr-2" alt="">
        <h3 class="text-white text-sm">Manage Existing Blog</h3>
    </div>
</div>
</template>
<script>
export default {
    name: 'SideBar',
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
<style scoped>
.sidebar {
    width: 18%;
    background: #041721;
}
</style>
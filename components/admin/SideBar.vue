<template>
  <div>
    <!-- Sidebar Web View -->
    <div class="sidebar hidden lg:block px-4 py-4">
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

    
  </div>
</template>
<script>
  export default {
    name: 'SideBar',
    data() {
      return {
				showMenu: false,
			}
    },
    methods: {
			toggleNavbar: function () {
        this.showMenu = !this.showMenu;
      },
		}
  }

</script>
<style scoped>
<<<<<<< HEAD
.sidebar {
    width: 18%;
=======
  .sidebar {
    height: 100vh;
    overflow: hidden;
>>>>>>> 712821322c5f8fa33572974cd9be0f337f5a5d00
    background: #041721;
  }

</style>

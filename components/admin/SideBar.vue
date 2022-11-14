<template>
  <div>
    <!-- Sidebar Web View -->
    <div class="sidebar hidden h-full lg:block px-4 py-4">
      <div class="flex justify-center w-full">
        <img src="../../assets/images/logo2.png" class="w-4/6 h-fit mb-4" alt="">
      </div>
      <div class="flex flex-col justify-center items-center w-full h-48">
        <div class="profile w-fit h-fit rounded-full border-sky-400 border-2 px-1 py-1">
          <img :src="img" class="w-20 h-20 rounded-full" alt="">
          <!-- <img v-else src="../../assets/images/profile.jpg" class="w-20 h-20 rounded-full" alt=""> -->
        </div>
        <p class="font-bold text-slate-600 antialiased mt-2">{{ user.FullName }}</p>
      </div>
      <div class="w-full h-fit flex flex-col justify-center items-center">
        <button
          id="dashboard"
          class="nav-btn rounded-md mt-2 hover:bg-blue-500 w-5/6 h-10 transition duration-300 ease-out hover:ease-in hover:text-white"
          @mouseenter="mouseOver(0)"
          @mouseout="mouseOut(0)"
        >
          <nuxt-link to="/dashboard-admin/home"
            class="flex px-2 w-full h-full items-center transition duration-300 ease-out hover:ease-in hover:text-white text-sm">
            <div class="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke="currentColor"
                class="w-5 h-5 mr-2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Dashboard
            </div>
          </nuxt-link>
        </button>
        <button
        id="article"
          class="nav-btn rounded-md mt-2 hover:bg-blue-500 w-5/6 h-10 transition duration-300 ease-out hover:ease-in hover:text-white"
          @mouseover="mouseOver(1)"
          @mouseout="mouseOut(1)"
        >
          <nuxt-link to="/dashboard-admin/article"
            class="flex px-2 w-full h-full transition duration-300 ease-out hover:ease-in hover:text-white text-sm">
            <div class="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
              Article/Blog
            </div>
          </nuxt-link>
        </button>    
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
        dashboard: false,
        article: false,
        active: false,
        img: '',
      }
    },
    computed: {
      user () {
        return this.$store.state.login.userData
      }
    },
    mounted(){this.img = this.$store.state.login.userData.PhotoUrl},
    methods: {
      toggleNavbar: function () {
        this.showMenu = !this.showMenu;
      },
      mouseOver(i) {
        if (i == 0) {
          this.dashboard = true
        }
        if(i == 1 ){
          this.article = true
        }
      },
      mouseOut(i) {
        if (i == 0) {
          this.dashboard = false
        }
        if(i == 1){
          this.article = false
        }
      }
    }
  }

</script>
<style scoped>
  .sidebar {
    overflow: hidden;
    background: #FFFF;
    font-family: 'Inter', sans-serif;
  }

</style>

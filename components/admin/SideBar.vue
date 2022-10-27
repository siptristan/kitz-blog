<template>
  <div>
    <!-- Sidebar Web View -->
    <div class="sidebar hidden lg:block px-4 py-4">
      <div class="flex justify-center w-full">
        <img src="../../assets/images/logo2.png" class="w-4/6 h-fit mb-4" alt="">
      </div>
      <div class="flex flex-col justify-center items-center w-full h-48">
        <div class="profile w-fit h-fit rounded-full border-sky-400 border-2 px-1 py-1">
          <img src="../../assets/images/profile.jpg" class="w-20 h-20 rounded-full" alt="">
        </div>
        <p class="font-bold text-slate-600 antialiased mt-2">Admin blog</p>
      </div>
      <div class="w-full h-fit flex flex-col justify-center items-center">
        <button
        id="dashboard"
          class="rounded-md mt-2 hover:bg-blue-500 w-5/6 h-10 transition duration-300 ease-out hover:ease-in hover:text-white"
          @mouseenter="mouseOver(1)"
          @mouseout="mouseOut(1)"
        >
          <nuxt-link to="/dashboard-admin"
            class="flex px-2 w-full h-full items-center transition duration-300 ease-out hover:ease-in hover:text-white text-sm">
            <div class="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                :class="`feather feather-home ${dashboard == true ? 'stroke-white' : 'stroke-black'} mr-2`">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Dashboard
            </div>
          </nuxt-link>
        </button>
        <button
        id="profile"
          class="rounded-md mt-2 hover:bg-blue-500 w-5/6 h-10 transition duration-300 ease-out hover:ease-in hover:text-white"
          @mouseenter="mouseOver(2)"
          @mouseout="mouseOut(2)"
        >
          <nuxt-link to="/dashboard-admin/profile"
            class="flex px-2 w-full h-full transition duration-300 ease-out hover:ease-in hover:text-white text-sm">
            <div class="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                :class="`feather feather-user ${profile == true ? 'stroke-white' : 'stroke-black'} mr-2`">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Profile
            </div>
          </nuxt-link>
        </button>
        <button
        id="manage"
          class="rounded-md mt-2 hover:bg-blue-500 w-5/6 h-10 transition duration-300 ease-out hover:ease-in hover:text-white"
          @mouseover="mouseOver(3)"
          @mouseout="mouseOut(3)"
        >
          <a href="#"
            class="flex px-2 w-full h-full transition duration-300 ease-out hover:ease-in hover:text-white text-sm">
            <div class="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                :class="`feather feather-edit ${manage == true ? 'stroke-white' : 'stroke-black'} mr-2`">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Manage Blog
            </div>
          </a>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SideBar',
    // props: {
    //   status: {
    //     type: Boolean,
    //     required: true,
    //     default: false
    //   }
    // },
    data() {
      return {
        showMenu: false,
        dashboard: false,
        profile: false,
        manage: false,
        active: false
      }
    },
    methods: {
      toggleNavbar: function () {
        this.showMenu = !this.showMenu;
      },
      mouseOver(i) {
        if (i == 1) {
          this.dashboard = true
        }
        if (i == 2) {
          this.profile = true
        }
        if (i == 3) {
          this.manage = true
        }
      },
      mouseOut(i) {
        if (i == 1) {
          this.dashboard = false
        }
        if (i == 2) {
          this.profile = false
        }
        if (i == 3) {
          this.manage = false
        }
      }
    }
  }

</script>
<style scoped>
  .sidebar {
    height: 100vh;
    overflow: hidden;
    background: #FFFF;
    font-family: 'Inter', sans-serif;
  }

</style>

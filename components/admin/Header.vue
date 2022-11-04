<template>
  <div>
    <div class="card w-full h-fit rounded bg-white px-4 py-2.5 flex justify-between lg:justify-end">
      <div class="lg:hidden" v-on:click="toggleNavbar()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

      <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="flex">
        <div class="rounded-full w-6 h-6 p-1 mt-1 mr-2 border-2 border-green-400">
          <img src="../../assets/images/user-head.svg" class="w-fit h-fit mr-2" alt="">
        </div>
        <p class="mt-1">Admin</p>
        <div class="mt-2">
          <svg class="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
      </button>

      <div id="dropdownAvatarName"
        class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
          <li class="flex ml-2">
            <div class="my-2 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <a href="#" class="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
          </li>
          <li class="flex ml-2">
            <div class="my-2 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
            </div>
            <a href="#" class="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Change
              Password</a>
          </li>
        </ul>
        <div class="py-1">
          <div class="flex ml-2">
            <div class="my-2 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
              </svg>
            </div>
            <a href="#"
              class="block py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
              out</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar Mobile -->
    <div v-bind:class="{ hidden: !showMenu, block: showMenu }"
      class="sidebar lg:hidden -mt-16 -ml-4 md:-ml-10 z-10 fixed">
      <div class="flex w-10/12 mx-auto place-content-between">
        <img src="../../assets/images/logo2.png" class="w-2/4 h-fit my-4" alt="">
        <button class="" type="button">
          <img src="../../assets/icons/close-button.svg" v-on:click="toggleNavbar()" alt="" />
        </button>
      </div>
      <div class="flex flex-col justify-center items-center w-full h-48">
        <div class="profile w-fit h-fit rounded-full border-sky-400 border-2 px-1 py-1">
          <img src="../../assets/images/profile.jpg" class="w-20 h-20 rounded-full" alt="">
        </div>
        <p class="font-bold text-slate-600 antialiased mt-2">Admin blog</p>
      </div>
      <div class="w-full h-fit flex flex-col justify-center items-center">
        <button id="dashboard"
          class="nav-btn rounded-md mt-2 hover:bg-blue-500 w-5/6 h-10 transition duration-300 ease-out hover:ease-in hover:text-white"
          @mouseenter="mouseOver(0)" @mouseout="mouseOut(0)">
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
        <button id="profile"
          class="nav-btn rounded-md mt-2 hover:bg-blue-500 w-5/6 h-10 transition duration-300 ease-out hover:ease-in hover:text-white"
          @mouseenter="mouseOver(1)" @mouseout="mouseOut(1)">
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
        <button id="manage"
          class="nav-btn rounded-md mt-2 hover:bg-blue-500 w-5/6 h-10 transition duration-300 ease-out hover:ease-in hover:text-white"
          @mouseover="mouseOver(2)" @mouseout="mouseOut(2)">
          <nuxt-link to="/dashboard-admin/create-blog"
            class="flex px-2 w-full h-full transition duration-300 ease-out hover:ease-in hover:text-white text-sm">
            <div class="flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                :class="`feather feather-edit ${manage == true ? 'stroke-white' : 'stroke-black'} mr-2`">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Manage Blog
            </div>
          </nuxt-link>
        </button>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'Header',
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
        if (i == 0) {
          this.dashboard = true
        }
        if (i == 1) {
          this.profile = true
        }
        if (i == 2) {
          this.manage = true
        }
      },
      mouseOut(i) {
        if (i == 0) {
          this.dashboard = false
        }
        if (i == 1) {
          this.profile = false
        }
        if (i == 2) {
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

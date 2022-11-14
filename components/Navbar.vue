<template>
  <nav class="bg-white w-full h-16">
    <div class="flex w-10/12 place-content-between mx-auto pt-3">
      <nuxt-link to="/"><img src="../assets/images/logo.png" class="w-11 mt-2" alt=""></nuxt-link>

      <button class="block lg:hidden" type="button">
        <img src="../assets/icons/menu-button.svg" v-on:click="toggleNavbar()" alt="" />

      </button>
      <!-- Menu Web View -->
      <div class="flex">
        <div class="menu hidden md:block mt-2">
          <nuxt-link class="text-base mx-6 hover:text-blue-500" to="/">Home</nuxt-link>
          <nuxt-link class="text-base mx-6 hover:text-blue-500" to="/physician"> Physician</nuxt-link>
          <nuxt-link class="text-base mx-6 hover:text-blue-500" to="/blog">Blog</nuxt-link>
          <nuxt-link class="text-base mx-6 hover:text-blue-500" to="/">About</nuxt-link>
          <nuxt-link class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to="#">Sign In</nuxt-link>
        </div>
        <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" class="flex mt-1">
          <div class="rounded-full w-6 h-6 mt-1 mr-2 border-2 border-green-400">
            <img :src="img" class="rounded-full w-fit h-fit mr-2" alt="">
          </div>
          <p class="mt-1">Aloysius</p>
          <div class="mt-2">
            <svg class="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>

    <div v-bind:class="{ hidden: !showMenu, block: showMenu }"
      class="lg:hidden fixed inset-y-0 right-0 w-full h-screen bg-opacity-100">

      <div class="bg-navbar-mobile w-11/12 ml-auto">
        <div class="flex flex-col lg:flex-row lg:w-8/12 h-screen bg-black opacity-90">
          <div class="flex items-center justify-between px-5 mt-6">
            <img src="../assets/images/logo.png" class="w-11 mt-2" alt="">
            <button class="block lg:hidden" type="button">
              <img src="../assets/icons/close-button.svg" v-on:click="toggleNavbar()" alt="" />
            </button>
          </div>
          <div class="lg:flex lg:flex-grow items-center">
            <div class="flex flex-col py-4 lg:py-0">
              <nuxt-link class="
									block
									py-4
									px-5
									text-white
									font-semibold
									hover:text-blue-500
								" 
                to="/">
                Home
              </nuxt-link>
              <nuxt-link class="
									block
									py-4
									px-5
									text-white
									font-semibold
									hover:text-blue-500
								" 
                to="/physician">
                Physician
              </nuxt-link>
              <nuxt-link class="
									block
									py-4
									px-5
									text-white
									font-semibold
									hover:text-blue-500
								" 
                to="/blog">
                Blog
              </nuxt-link>
              <nuxt-link class="
									block
									py-4
									px-5
									text-white
									font-semibold
									hover:text-blue-500
								" 
                to="/">
                About
              </nuxt-link>
              <nuxt-link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to="#">Sign In</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        showMenu: false,
      };
    },

    methods: {
      toggleNavbar: function () {
        this.showMenu = !this.showMenu;
      },
    }
  }

</script>

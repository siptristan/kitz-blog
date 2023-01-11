<template>
  <nav class="bg-white w-full h-16">
    <div class="flex w-10/12 place-content-between mx-auto pt-3">
      <nuxt-link to="/"><img src="../assets/images/logo.png" class="w-11 mt-2" alt=""></nuxt-link>

      <button class="block lg:hidden" type="button">
        <img src="../assets/icons/menu-button.svg" v-on:click="toggleNavbar()" alt="" />

      </button>
      <!-- Menu Web View -->
      <div class="flex items-center">
        <div class="menu hidden md:block mt-2">
          <nuxt-link class="text-base mx-6 hover:text-blue-500" to="/">Home</nuxt-link>
          <nuxt-link class="text-base mx-6 hover:text-blue-500" to="/physician"> Physician</nuxt-link>
          <nuxt-link class="text-base mx-6 hover:text-blue-500" to="/blog">Blog</nuxt-link>
          <nuxt-link class="text-base mx-6 hover:text-blue-500" to="/">About</nuxt-link>
        </div>
        <div>
          <nuxt-link v-if="user.isLoggedIn == false" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to="/signin">Sign In</nuxt-link>
          <div v-else class="relative">
            <button @click="dropdown" class="flex mt-1">
              <div class="rounded-full w-6 h-6 mt-1 mr-2 border-2 border-green-400">
                <img :src="img" class="rounded-full w-fit h-fit mr-2" alt="">
              </div>
              <p class="mt-1">{{ user.userData?.FullName }}</p>
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
              class="hidden max-[1024px]:left-3/4 max-[650px]:left-2/4 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
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
                <li v-if="user.isPhysician == true" class="flex ml-2">
                  <div class="my-2 mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-5 h-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <a target="_blank" :href="`https://blog-manager.site/auth-client?Email=${user.userData?.EmailAddress}&FullName=${user.userData?.FullName}&PhotoUrl=${user.userData?.PhotoUrl}&ParamedicID=${user.userData?.ParamedicID}&ParamedicName=${user.userData?.ParamedicName}`" class="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard admin</a>
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
                  <a href="javascript:void(0)"
                  @click="signout"
                    class="block py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                    out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        img: '',
        count: 1
      };
    },
    computed: {
      user () {
        return this.$store.state.login
      },
    },
    mounted(){this.img = this.$store.state.login.userData?.PhotoUrl},
    methods: {
      toggleNavbar: function () {
        this.showMenu = !this.showMenu;
      },
      signout() {
        this.$store.dispatch('login/signOut')
      },
      dropdown() {
        this.count += 1;
        let dropdownMenu = document.getElementById('dropdownAvatarName')

        if  (this.count % 2 == 0) {
          dropdownMenu.classList.remove('hidden')
          dropdownMenu.classList.add('absolute')
          dropdownMenu.classList.add('top-10')
        } else {
          dropdownMenu.classList.remove('absolute')
          dropdownMenu.classList.remove('top-10')
          dropdownMenu.classList.add('hidden')
        }
      }
    }
  }

</script>

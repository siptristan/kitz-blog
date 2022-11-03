<template>
  <nav class="bg-white w-full h-16">
    <div class="flex w-10/12 place-content-between mx-auto pt-3">
      <NuxtLink to="/"><img src="../assets/images/logo.png" class="w-11 mt-2" alt=""></NuxtLink>

      <button class="block lg:hidden" type="button">
        <img src="../assets/icons/menu-button.svg" v-on:click="toggleNavbar()" alt="" />

      </button>
      <!-- Menu Web View -->
      <div class="menu hidden md:block mt-2">
        <NuxtLink to="/"><a href="#" class="text-base mx-6 hover:text-blue-500">Home</a></NuxtLink>
        <NuxtLink to="/physician"> <a href="#" class="text-base mx-6 hover:text-blue-500">Physician</a></NuxtLink>
        <NuxtLink to="/blog"><a href="#" class="text-base mx-6 hover:text-blue-500">Blog</a></NuxtLink>
        <NuxtLink to="/"><a href="#" class="text-base mx-6 hover:text-blue-500">About</a></NuxtLink>
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
              <NuxtLink to="/">
                <a href="#" class="
									block
									py-4
									px-5
									text-white
									font-semibold
									hover:text-blue-500
								">Home</a>
              </NuxtLink>
              <NuxtLink to="/physician">
                <a href="#" class="
									block
									py-4
									px-5
									text-white
									font-semibold
									hover:text-blue-500
								">Physician</a>
              </NuxtLink>
              <NuxtLink to="/blog">
                <a href="#" class="
									block
									py-4
									px-5
									text-white
									font-semibold
									hover:text-blue-500
								">Blog</a>
              </NuxtLink>
              <NuxtLink to="/">
                <a href="#" class="
									block
									py-4
									px-5
									text-white
									font-semibold
									hover:text-blue-500
								">About</a>
              </NuxtLink>





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

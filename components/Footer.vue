<template>
  <footer class="p-4 bg-white sm:p-6">
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
    <div class="md:flex md:justify-between md:w-10/12 mx-auto">
      <div class="mb-6 md:mb-0">
        <a href="#" class="flex items-center">
          <img src="../assets/images/logo2.png" class="w-48" alt="">
        </a>
      </div>
      <div class="grid grid-cols-2">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Menu</h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">Home</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Physician</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Blog</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">About</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
          <ul class="text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
    <div class="text-center">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#"
          class="hover:underline">KiTZ</a>. All Rights Reserved.
      </span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
  }

</script>

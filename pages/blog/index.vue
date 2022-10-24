<template>
  <div>
    <Navbar />
    <div class="w-11/12 mx-auto mt-8">
      <div class="my-10">
        <div class="heading">
          <h1 class="text-4xl text-center font-semibold">Blog and Article</h1>
          <p class="mt-4 font-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <form>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-10/12 mx-auto">
          <div class="w-full">
            <input type="text" id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Title Blog / Article ..." required="">
          </div>
          <select id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected="">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </form>

      <div class="my-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-full" src="../../assets/images/search_bg.png" alt="">
            <div class="p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
              <div class="flex my-4">
                <img src="../../assets/images/logo.png" class="w-8 mr-4 rounded-full" alt="">
                <div class="mt-1">
                  <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
                </div>
              </div>
              <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
              <NuxtLink to="/blog/detail">
                <a href="#"
                  class="inline-flex items-center py-2 text-sm font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </NuxtLink>
            </div>
          </div>
          <div
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-full" src="../../assets/images/search_bg.png" alt="">
            <div class="p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
              <div class="flex my-4">
                <img src="../../assets/images/logo.png" class="w-8 mr-4 rounded-full" alt="">
                <div class="mt-1">
                  <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
                </div>
              </div>
              <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
              <NuxtLink to="/blog/detail">
                <a href="#"
                  class="inline-flex items-center py-2 text-sm font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </NuxtLink>
            </div>
          </div>
          <div
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-full" src="../../assets/images/search_bg.png" alt="">
            <div class="p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
              <div class="flex my-4">
                <img src="../../assets/images/logo.png" class="w-8 mr-4 rounded-full" alt="">
                <div class="mt-1">
                  <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
                </div>
              </div>
              <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
              <NuxtLink to="/blog/detail">
                <a href="#"
                  class="inline-flex items-center py-2 text-sm font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </NuxtLink>
            </div>
          </div>
          <div
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-full" src="../../assets/images/search_bg.png" alt="">
            <div class="p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
              <div class="flex my-4">
                <img src="../../assets/images/logo.png" class="w-8 mr-4 rounded-full" alt="">
                <div class="mt-1">
                  <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
                </div>
              </div>
              <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
              <NuxtLink to="/blog/detail">
                <a href="#"
                  class="inline-flex items-center py-2 text-sm font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </NuxtLink>
            </div>
          </div>
          <div
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-full" src="../../assets/images/search_bg.png" alt="">
            <div class="p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
              <div class="flex my-4">
                <img src="../../assets/images/logo.png" class="w-8 mr-4 rounded-full" alt="">
                <div class="mt-1">
                  <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
                </div>
              </div>
              <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
              <NuxtLink to="/blog/detail">
                <a href="#"
                  class="inline-flex items-center py-2 text-sm font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </NuxtLink>
            </div>
          </div>
          <div
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img class="rounded-t-lg w-full" src="../../assets/images/search_bg.png" alt="">
            <div class="p-5">
              <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
              <div class="flex my-4">
                <img src="../../assets/images/logo.png" class="w-8 mr-4 rounded-full" alt="">
                <div class="mt-1">
                  <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
                </div>
              </div>
              <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise
                technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
              <NuxtLink to="/blog/detail">
                <a href="#"
                  class="inline-flex items-center py-2 text-sm font-semibold text-center text-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 mt-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

    </div>
    <Footer />
  </div>
</template>

<script>
  export default {
    name: 'BlogPage'
  }

</script>

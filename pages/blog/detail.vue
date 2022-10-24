<template>
  <div>
    <Navbar />
    <div class="w-11/12 md:w-8/12 mx-auto my-10">
      <div class="heading my-8">
        <h1 class="text-4xl font-bold">Noteworthy technology acquisitions 2021</h1>
      </div>
      <div class="flex my-4">
        <img src="../../assets/images/logo.png" class="w-12 mr-4 rounded-full" alt="">
        <div class="mt-1">
          <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
          <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
        </div>
      </div>
      <div class="w-full">
        <img src="../../assets/images/search_bg.png" class="w-full" alt="">
      </div>
      <div class="content my-4">
        <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus excepturi eaque
          fugit illum perferendis voluptate ad iste autem dolorum eligendi deleniti magnam, nemo nisi consectetur
          dolores facere soluta praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
          libero quae iure, enim dolorem aspernatur maiores minima repellat eveniet deleniti eum dolores reprehenderit
          sapiente eius nobis nesciunt facilis et! Reiciendis.</p>
        <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus excepturi eaque
          fugit illum perferendis voluptate ad iste autem dolorum eligendi deleniti magnam, nemo nisi consectetur
          dolores facere soluta praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
          libero quae iure, enim dolorem aspernatur maiores minima repellat eveniet deleniti eum dolores reprehenderit
          sapiente eius nobis nesciunt facilis et! Reiciendis.</p>
        <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus excepturi eaque
          fugit illum perferendis voluptate ad iste autem dolorum eligendi deleniti magnam, nemo nisi consectetur
          dolores facere soluta praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
          libero quae iure, enim dolorem aspernatur maiores minima repellat eveniet deleniti eum dolores reprehenderit
          sapiente eius nobis nesciunt facilis et! Reiciendis.</p>
        <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus excepturi eaque
          fugit illum perferendis voluptate ad iste autem dolorum eligendi deleniti magnam, nemo nisi consectetur
          dolores facere soluta praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
          libero quae iure, enim dolorem aspernatur maiores minima repellat eveniet deleniti eum dolores reprehenderit
          sapiente eius nobis nesciunt facilis et! Reiciendis.</p>
        <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus excepturi eaque
          fugit illum perferendis voluptate ad iste autem dolorum eligendi deleniti magnam, nemo nisi consectetur
          dolores facere soluta praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
          libero quae iure, enim dolorem aspernatur maiores minima repellat eveniet deleniti eum dolores reprehenderit
          sapiente eius nobis nesciunt facilis et! Reiciendis.</p>
        <p class="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium possimus excepturi eaque
          fugit illum perferendis voluptate ad iste autem dolorum eligendi deleniti magnam, nemo nisi consectetur
          dolores facere soluta praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
          libero quae iure, enim dolorem aspernatur maiores minima repellat eveniet deleniti eum dolores reprehenderit
          sapiente eius nobis nesciunt facilis et! Reiciendis.</p>
      </div>

      <div class="my-8">
        <h2 class="text-2xl font-semibold my-4">Add Comment</h2>
        <form action="#">
          <div class="mb-6">
            <label for="default-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
            <input type="text" id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your name...">
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Comment</label>
            <textarea id="message" rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your comment...."></textarea>
          </div>
          <button type="submit"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Publish post
          </button>
        </form>
      </div>

      <div>
        <h2 class="text-2xl font-semibold my-4">Comment</h2>
        <div class="grid grid-cols-1 gap-4">
          <div class="bg-white rounded-lg border shadow-md px-3 py-1">
            <div class="my-4">
              <div class="mt-1">
                <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
                <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
              </div>
              <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus esse quibusdam repellat
                  deleniti tempore a eaque dolores impedit sit ullam nulla excepturi sunt incidunt quasi corporis,
                  perferendis saepe iste.</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg border shadow-md px-3 py-1">
            <div class="my-4">
              <div class="mt-1">
                <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
                <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
              </div>
              <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus esse quibusdam repellat
                  deleniti tempore a eaque dolores impedit sit ullam nulla excepturi sunt incidunt quasi corporis,
                  perferendis saepe iste.</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg border shadow-md px-3 py-1">
            <div class="my-4">
              <div class="mt-1">
                <p class="text-sm font-semibold">Aldi Muhammad Rahim</p>
                <p class="text-xs font-semibold text-gray-400">19 Oktober 2022</p>
              </div>
              <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus esse quibusdam repellat
                  deleniti tempore a eaque dolores impedit sit ullam nulla excepturi sunt incidunt quasi corporis,
                  perferendis saepe iste.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-8 text-center">
          <button type="submit"
            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Load More
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  export default {
    name: 'DetailPage'
  }

</script>

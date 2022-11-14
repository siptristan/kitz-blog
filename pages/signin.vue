<template>
  <div class="w-10/12 mx-auto">
    <div
      class="p-4 w-full max-w-sm mx-auto my-20 md:my-28 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="space-y-6">
        <div>
          <img src="../assets/images/logo2.png" class="w-6/12 mx-auto" alt="">
          <h1 class="text-center font-normal text-gray-500 my-8">Please Sign In with Your Account</h1>
        </div>
        <div>
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
          <input type="text" name="email" id="email" v-model="username"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Enter your username...." required="">
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
          <input type="password" name="password" id="password" v-model="password" placeholder="Enter your password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required="">
        </div>

        <button 
          @click="login"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign
          In</button>
        <div class="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
          Forgot Password? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Click Here</a>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: "Signin",
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            const data = {
                UserName: this.username,
                Password: this.password
            }
            this.$store.dispatch('login/login', data)
        }
    }
  }

</script>

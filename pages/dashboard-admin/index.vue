<template>
  <div id="pageAdmin" class="lg:flex bg-[#F3F2F3] w-full h-full z-0" v-if="isLoggedIn">
    <side-bar />
    <div class="container w-full mx-auto px-4 py-4 overflow-scroll">
      <Header />
      <div class="container-home overflow-hidden py-5">
        <div class="container-home-content md:flex py-5">
          <div class="card-blog-status w-full mb-4 md:w-4/12 lg:w-1/4 h-full px-4 py-4 mr-5 rounded-3xl text-white">
            <div class="card-head flex justify-between">
              <h1>Blog Status</h1>
              <div class="icon-more border border-sky-400 rounded-lg px-1">
                <h1 class="text-sm">:</h1>
              </div>
            </div>
            <div class="card-body mt-4">
              <div class="content flex justify-center items-center">
                <div class="text-center">
                  <p class="text-4xl">15</p>
                  <p class="text-xs font-normal">published</p>
                </div>
                <hr class="rotate-90 mx-4 border-1 w-10 border-slate-400">
                <div class="text-center">
                  <p class="text-4xl">10</p>
                  <p class="text-xs font-normal">Unpublished</p>
                </div>
              </div>
              <div class="content-2 mt-8">
                <div class="flex items-center mt-5">
                  <img src="../../assets/images/check-circle.svg" alt="">
                  <p class="text-xs ml-2 subpixel-antialiased"><b>Tema Tips Kesehatan</b> sudah tersedia</p>
                </div>
                <div class="flex items-center mt-5">
                  <img src="../../assets/images/check-circle.svg" alt="">
                  <p class="text-xs ml-2 subpixel-antialiased"><b>Tema Obat-Obatan</b> sudah tersedia</p>
                </div>
                <div class="flex items-center mt-5">
                  <img src="../../assets/images/check-circle.svg" alt="">
                  <p class="text-xs ml-2 subpixel-antialiased"><b>Tema Penyakit</b> sudah tersedia</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-chart-area w-full md:w-8/12 lg:w-3/4 h-full px-4 py-7 rounded-3xl bg-white">
            <p>Jumlah kunjungan pada blog</p>
            <client-only>
              <VueApexCharts width="100%" height="100%" type="area" :options="chartOptions" :series="series">
              </VueApexCharts>
            </client-only>
            <!-- <ChartArea /> -->
          </div>
        </div>

        <div class="card-footer w-full rounded-3xl px-10 py-10">
          <div class="content-footer w-full h-full md:flex justify-start">
            <div class="w-full md:w-1/3 h-fit">
              <h1 class="mb-8 text-2xl"><b>Aktivitas Pada Blog</b></h1>
              <p class="text-md">Statistik <b>aktivitas user</b><br> ketika mengunjungi blog <br> anda</p>
            </div>
            <div class="w-full md:w-2/3 h-full md:flex md:justify-start items-center">
              <div v-for="(item, i) in img" :key="i">
                <Card :desc="item.title" :source="item.image" :value="item.value" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="" v-else>
    <div class="w-10/12 mx-auto">
      <div
        class="p-4 w-full max-w-sm mx-auto my-20 md:my-28 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="space-y-6">
          <div>
            <img src="../../assets/images/logo2.png" class="w-6/12 mx-auto" alt="">
            <h1 class="text-center font-normal text-gray-500 my-8">Please Sign In with Your Account</h1>
          </div>
          <div>
            <label for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
            <input type="text" name="email" id="email" v-model="username"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your username...." required="">
          </div>
          <div>
            <label for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
            <input type="password" name="password" id="password" v-model="password" placeholder="Enter your password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required="">
          </div>

          <button @click="login"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign
            In</button>
          <div class="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
            Forgot Password? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Click Here</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    // ChartArea, 
    SideBar,
    Header,
    Card
  } from '../index.js'
  export default {
    components: {
      // ChartArea,
      VueApexCharts: () => import('vue-apexcharts'),
      SideBar,
      Header,
      Card
    },
    computed: {
      isLoggedIn() {
        return this.$store.state.login.isLoggedIn
      }
    },
    data() {
      return {
        username: '',
        password: '',
        img: [{
            title: 'visitor minggu ini',
            value: 37,
            image: 'eye.svg'
          },
          {
            title: 'komentar blog',
            value: 21,
            image: 'edit-3.svg'
          },
          {
            title: 'Dibagikan',
            value: 17,
            image: 'share.svg'
          },
        ],
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }],
        chartOptions: {
          chart: {
            toolbar: {
              show: false
            },
            type: 'area',
            background: '#FFFFF'
          },
          dataLabels: {
            enabled: true
          },
          labels: ['18 Okt', '19 Okt', '20 Okt', '21 Okt', '22 Okt', '23 Okt', '24 Okt'],
          stroke: {
            curve: 'smooth'
          },
          yaxis: {
            show: false
          },
          xaxis: {
            labels: {
              show: true
            }
          },
          grid: {
            show: false
          },
          colors: ['#e0f5f9']
          // xaxis: {
          //   type: 'datetime',
          //   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          // },
          // tooltip: {
          //   x: {
          //     format: 'dd/MM/yy HH:mm'
          //   },
          // },
        },
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
<style scoped>
  .container-home {
    height: 90% !important;
  }

  .container-home-content {
    height: 58% !important;
  }

  .card-blog-status {
    background: #0F1322;
  }

  .card-chart-area {
    background: #95CFD9
  }

  .card-footer {
    background: rgba(229, 186, 158, 0.896);
    height: 40%;
  }

</style>

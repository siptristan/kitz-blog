<template>
  <div class="container-home overflow-hidden">
    <div class="container-home-content flex mt-5">
      <div class="card-blog-status w-1/4 h-5/6 px-4 py-4 mr-5 rounded-3xl text-white">
        <div class="card-head flex justify-between">
          <h1>Blog Status</h1>
          <div class="icon-more border border-sky-400 rounded-lg px-1">
            <h1 class="text-sm">:</h1>
          </div>
        </div>
        <div class="card-body mt-4">
          <div class="content flex justify-center items-center mt-12">
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
      <div class="card-chart-area w-3/4 h-5/6 px-4 py-7 rounded-3xl bg-white">
        <p>Jumlah kunjungan pada blog</p>
        <ChartArea />
      </div>
    </div>
    <div class="card-footer h-1/3 w-full rounded-3xl"></div>
  </div>
</template>
<script>
import { ChartArea } from '../index.js'
export default {
  layout: 'Admin',
  components: {
    ChartArea
  },
  data() {
    return {
      img: [
        {
          title: 'Blog Terpublish',
          value: 12,
          image: 'check-circle.svg'
        },
        {
          title: 'Blog In Progress',
          value: 2,
          image: 'info.svg'
        },
      ]
    }
  }
}
</script>
<style scoped>
.container-home {
  height: 90% !important;
}
.container-home-content {
  height: 60% !important;
}
.card-blog-status {
  background: #0F1322;
}
.card-chart-area {
  background: #95CFD9
}
.card-footer {
  background: rgb(245, 155, 30);
}
</style>
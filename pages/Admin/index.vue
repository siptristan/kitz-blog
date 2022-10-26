<template>
<div id="pageAdmin" class="w-11/12 mx-auto">
  <div class="flex justify-start mt-5">
    <div v-for="(item, i) in img" :key="i" class="w-fit h-fit px-4 py-4 mr-3 rounded-md bg-white">
      <Card :source="item.image" :desc="item.title"/>
    </div>
  </div>
  <div class="flex justify-start mt-5">
      <!-- <h1 class="h-fit">Under Maintenance</h1> -->
      <div class="card w-fit h-fit px-4 py-4 rounded-md bg-white">
        <p>Jumlah kunjungan pada blog</p>
        <ChartArea />
      </div>
  </div>
</div>
</template>
<script>
import { ChartArea, Card } from '../index.js'
export default {
    layout: 'Admin',
    components: {
      ChartArea,
      Card
    },
    data() {
      return {
        img: [
          {
            title: 'Blog Terpublish',
            image: 'check-circle.svg'
          },
          {
            title: 'Blog In Progress',
            image: 'info.svg'
          },
        ]
      }
    }
    // data() {
    //     return {
    //       series: [{
    //         name: 'series1',
    //         data: [31, 40, 28, 51, 42, 109, 100]
    //       }],
    //       chartOptions: {
    //         chart: {
    //           toolbar: {
    //             show: false
    //           },
    //           height: 350,
    //           type: 'area'
    //         },
    //         dataLabels: {
    //           enabled: true
    //         },
    //         //labels: ['18 Okt', '19 Okt', '20 Okt', '21 Okt', '22 Okt', '23 Okt', '24 Okt'],
    //         stroke: {
    //           curve: 'smooth'
    //         },
    //         yaxis: {
    //           show: false
    //         },
    //         xaxis: {
    //           labels: {
    //             show: false
    //           }
    //         },
    //         grid: {
    //           show: false
    //         }
    //         // xaxis: {
    //         //   type: 'datetime',
    //         //   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    //         // },
    //         // tooltip: {
    //         //   x: {
    //         //     format: 'dd/MM/yy HH:mm'
    //         //   },
    //         // },
    //       },
    //     }
    // },
}
</script>
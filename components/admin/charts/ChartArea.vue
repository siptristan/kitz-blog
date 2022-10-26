<template>
    <apexchart height="100%" type="area" :options="chartOptions" :series="series"></apexchart>
</template>
<script>
export default {
    name: 'ChartArea',
    data() {
        return {
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
    }
}
</script>
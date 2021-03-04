<template>
    <div class="catePrice">
        <div id="cate_price" style="width: 100%;height:500px;"></div>
    </div>
</template>

<script>

export default {
  name: 'CatePrice',
  methods: {
    priceChart () {
      var myChart = this.$echarts.init(document.getElementById('cate_price'))

      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['最低价', '最高价', '平均价格']
        },
        xAxis: [
          {
            type: 'category',
            data: ['cate1', 'cate2', 'cate3', 'cate4', 'cate5', 'cate6', 'cate7', 'cate8', 'cate9', 'cate10', 'cate11', 'cate12'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '价格',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ¥'
            }
          }
        ],
        series: [
          {
            name: '最低价',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name: '最高价',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 77.7, 175.6, 182.2, 48.7, 28.8, 16.0, 7.3]
          },
          {
            name: '平均价格',
            type: 'line',
            data: [2.3, 5.2, 8.0, 25.3, 26.4, 77.0, 153.6, 174, 40.0, 26.3, 12.0, 6.2]
          }
        ]
      }

      myChart.setOption(option)
    }
  },
  mounted () {
    this.priceChart()
  }
}
</script>

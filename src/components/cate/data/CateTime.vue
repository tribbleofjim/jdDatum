<template>
    <div class="cateTime">
        <div id="cate_time" style="width: 100%; height: 500px"></div>
    </div>
</template>

<script>
export default {
  name: 'CateTime',
  methods: {
    timeChart () {
      var myChart = this.$echarts.init(document.getElementById('cate_time'))

      var option = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['product', 'spring', 'summer', 'autumn', 'winter'],
            ['cate1', 56.5, 82.1, 88.7, 70.1],
            ['cate2', 51.1, 51.4, 55.1, 53.3],
            ['cate3', 40.1, 62.2, 69.5, 36.4],
            ['cate4', 25.2, 37.1, 41.2, 18]
          ]
        },
        xAxis: {type: 'category'},
        yAxis: {
          gridIndex: 0,
          name: '平均价格'
        },
        grid: {top: '55%'},
        series: [
          {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
          {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
          {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
          {type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: {focus: 'series'}},
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {focus: 'data'},
            label: {
              formatter: '{b}: {@spring} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: 'spring',
              tooltip: 'spring'
            }
          }
        ]
      }

      myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0]
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1
          myChart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          })
        }
      })

      myChart.setOption(option)
    }
  },
  mounted () {
    this.timeChart()
  }
}
</script>

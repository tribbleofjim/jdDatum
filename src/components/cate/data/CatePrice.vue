<template>
    <div class="catePrice">
        <div id="cate_price" style="width: 100%;height:500px;"></div>
    </div>
</template>

<script>

export default {
  name: 'CatePrice',
  props: ['category'],
  methods: {
    drawChart (res) {
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
            // data: ['cate1', 'cate2', 'cate3', 'cate4', 'cate5', 'cate6', 'cate7', 'cate8', 'cate9', 'cate10', 'cate11', 'cate12'],
            data: res.data.cates,
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
            max: 1000,
            interval: 200,
            axisLabel: {
              formatter: '{value} ¥'
            }
          }
        ],
        series: [
          {
            name: '最低价',
            type: 'bar',
            // data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            data: res.data.min_values
          },
          {
            name: '最高价',
            type: 'bar',
            // data: [2.6, 5.9, 9.0, 26.4, 28.7, 77.7, 175.6, 182.2, 48.7, 28.8, 16.0, 7.3]
            data: res.data.max_values
          },
          {
            name: '平均价格',
            type: 'line',
            // data: [2.3, 5.2, 8.0, 25.3, 26.4, 77.0, 153.6, 174, 40.0, 26.3, 12.0, 6.2]
            data: res.data.mid_values
          }
        ]
      }

      myChart.setOption(option)
    },
    async priceChart () {
      const data = await this.$axios.get('/category/price', {
        params: {
          'category': this.$props.category
        }
      })
      this.drawChart(data)
    }
  },
  mounted () {
    this.priceChart()
  }
}
</script>

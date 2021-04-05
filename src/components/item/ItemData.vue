<template>
    <div>
        <el-card class="box-card month" shadow="hover">
            <div slot="header" class="clearfix">
                <span>商品购买月份-型号点状图</span>
            </div>
            <div class="text item">
                <div id="item_data" style="width: 100%; height: 600px"></div>
            </div>
        </el-card>
        <div>
        <el-card class="box-card season" shadow="hover">
            <div slot="header" class="clearfix">
                <span>商品购买季节-型号雷达图</span>
            </div>
            <div class="text item">
                <div id="item_season_data" style="width: 100%; height: 600px"></div>
            </div>
        </el-card>
    </div>
    </div>
</template>

<style scoped>
 .month {
    width: 60%;
    height: 100%;
 }
 .season {
    width: 40%;
    height: 100%;
 }
</style>

<script>
export default {
  name: 'ItemData',
  props: ['skuId'],
  data () {
    return {
      months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      // categories: ['32g', '64g', '128g'],
      // item_data: [[0, 0, 5], [0, 1, 2], [0, 2, 4], [0, 3, 7], [1, 0, 5], [1, 1, 8], [1, 2, 5], [1, 3, 9], [2, 0, 7], [2, 1, 3], [2, 2, 8], [2, 3, 4]]
    }
  },
  methods: {
    drawMonthChart (res) {
      var that = this
      var chart = this.$echarts.init(document.getElementById('item_data'))

      var option = {
        tooltip: {
          position: 'top'
        },
        title: [],
        singleAxis: [],
        series: []
      }

      res.data.categories.forEach(function (category, idx) {
        option.title.push({
          textBaseline: 'middle',
          top: (idx + 0.5) * 100 / 7 + '%',
          text: category
        })
        option.singleAxis.push({
          left: 150,
          type: 'category',
          boundaryGap: false,
          data: that.months,
          top: (idx * 100 / 7 + 5) + '%',
          height: (100 / 7 - 10) + '%'
        })
        option.series.push({
          singleAxisIndex: idx,
          coordinateSystem: 'singleAxis',
          type: 'scatter',
          data: [],
          symbolSize: function (dataItem) {
            return dataItem[1] * 5
          }
        })
      })

      res.data.month_data.forEach(function (dataItem) {
        option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]])
      })

      chart.setOption(option)
    },
    drawSeasonChart (res) {
      var chart = this.$echarts.init(document.getElementById('item_season_data'))
      var option = {
        title: {
          text: '商品购买季节-型号雷达图'
        },
        tooltip: {},
        legend: {
          data: res.data.categories
        },
        radar: {
        // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            {
              name: '春季', max: res.data.max_value
            },
            {
              name: '夏季', max: res.data.max_value
            },
            {
              name: '秋季', max: res.data.max_value
            },
            {
              name: '冬季', max: res.data.max_value
            }
          ]
        },
        series: [{
          name: '型号',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: res.data.season_data
          // [
          //   {
          //     value: [23, 47, 14, 12],
          //     name: '型号1'
          //   },
          //   {
          //     value: [41, 42, 13, 24],
          //     name: '型号2'
          //   }
          // ]
        }]
      }

      chart.setOption(option)
    },
    async itemData () {
      const res = await this.$axios.get('/item/data', {
        params: {
          'skuId': this.$props.skuId
        }
      })
      this.drawMonthChart(res)
      this.drawSeasonChart(res)
    }
  },
  mounted () {
    this.itemData()
  }
}
</script>

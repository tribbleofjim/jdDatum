<template>
    <div>
        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <span>商品购买季节-型号点状图</span>
            </div>
            <div class="text item">
                <div id="item_data" style="width: 100%; height: 600px"></div>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
 .box-card {
    width: 100%;
    height: 100%;
 }
</style>

<script>
export default {
  name: 'ItemData',
  data () {
    return {
      seasons: ['spring', 'summer', 'autumn', 'winter'],
      categories: ['32g', '64g', '128g'],
      item_data: [[0, 0, 5], [0, 1, 2], [0, 2, 4], [0, 3, 7], [1, 0, 5], [1, 1, 8], [1, 2, 5], [1, 3, 9], [2, 0, 7], [2, 1, 3], [2, 2, 8], [2, 3, 4]]
    }
  },
  methods: {
    itemData () {
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

      that.categories.forEach(function (category, idx) {
        option.title.push({
          textBaseline: 'middle',
          top: (idx + 0.5) * 100 / 7 + '%',
          text: category
        })
        option.singleAxis.push({
          left: 150,
          type: 'category',
          boundaryGap: false,
          data: that.seasons,
          top: (idx * 100 / 7 + 5) + '%',
          height: (100 / 7 - 10) + '%',
          axisLabel: {
            interval: 2
          }
        })
        option.series.push({
          singleAxisIndex: idx,
          coordinateSystem: 'singleAxis',
          type: 'scatter',
          data: [],
          symbolSize: function (dataItem) {
            return dataItem[1] * 4
          }
        })
      })

      this.item_data.forEach(function (dataItem) {
        option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]])
      })

      chart.setOption(option)
    }
  },
  mounted () {
    this.itemData()
  }
}
</script>

<template>
    <div>
        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <span>商品购买季节-型号雷达图</span>
            </div>
            <div class="text item">
                <div id="item_season_data" style="width: 100%; height: 600px"></div>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
 .box-card {
    width: 40%;
    height: 100%;
 }
</style>

<script>
export default {
  name: 'ItemSeasonData',
  props: ['skuId'],
  methods: {
    drawChart (res) {
      var chart = this.$echarts.init(document.getElementById('item_season_datas'))

      var option = {
        title: {
          text: '商品购买季节-型号雷达图'
        },
        tooltip: {},
        legend: {
          data: ['型号1', '型号2']
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
              name: '春季', max: 50
            },
            {
              name: '夏季', max: 50
            },
            {
              name: '秋季', max: 50
            },
            {
              name: '冬季', max: 50
            }
          ]
        },
        series: [{
          name: '型号',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [23, 47, 14, 12],
              name: '型号1'
            },
            {
              value: [41, 42, 13, 24],
              name: '型号2'
            }
          ]
        }]
      }

      chart.setOption(option)
    }
    // async itemData () {
    //   const res = await this.$axios.get('/item/data', {
    //     params: {
    //       'skuId': this.$props.skuId
    //     }
    //   })
    //   this.drawChart(res)
    // }
  },
  mounted () {
    // this.itemData()
    this.drawChart(null)
  }
}
</script>

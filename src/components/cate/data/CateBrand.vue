<template>
    <div class="cateBrand">
        <div id="cate_brand" style="width:100%; height:500px"></div>
    </div>
</template>

<script>
export default {
  name: 'CateBrand',
  props: ['category'],
  methods: {
    myChart (res) {
      var myChart = this.$echarts.init(document.getElementById('cate_brand'))

      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          data: res.data.shops
        },
        series: [
          {
            name: '推荐店铺',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
              position: 'inner',
              fontSize: 14
            },
            labelLine: {
              show: false
            },
            data: res.data.core_items
          },
          {
            name: '推荐店铺',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
              length: 30
            },
            label: {
              formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              backgroundColor: '#F6F8FC',
              borderColor: '#8C8D8E',
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: '#6E7079',
                  lineHeight: 22,
                  align: 'center'
                },
                hr: {
                  borderColor: '#8C8D8E',
                  width: '100%',
                  borderWidth: 1,
                  height: 0
                },
                b: {
                  color: '#4C5058',
                  fontSize: 14,
                  fontWeight: 'bold',
                  lineHeight: 33
                },
                per: {
                  color: '#fff',
                  backgroundColor: '#4C5058',
                  padding: [3, 4],
                  borderRadius: 4
                }
              }
            },
            data: res.data.shops_data
          }
        ]
      }

      myChart.setOption(option)
    },
    async brandChart () {
      const data = await this.$axios.get('/category/brand', {
        params: {
          'category': this.$props.category
        }
      })
      this.myChart(data)
    }
  },
  mounted () {
    this.brandChart()
  }
}
</script>

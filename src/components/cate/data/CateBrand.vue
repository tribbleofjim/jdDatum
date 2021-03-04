<template>
    <div class="cateBrand">
        <div id="cate_brand" style="width:100%; height:500px"></div>
    </div>
</template>

<script>
export default {
  name: 'CateBrand',
  methods: {
    brandChart () {
      var myChart = this.$echarts.init(document.getElementById('cate_brand'))

      var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          data: ['自然堂旗舰店', 'abb专卖店', '自然堂杭州专营店', '屈臣氏官方旗舰店', '屈臣氏广州专营店', '梦梦家小店', '自然堂上海专营店', '其他']
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
            data: [
              {value: 1548, name: '自然堂', selected: true},
              {value: 775, name: '屈臣氏'},
              {value: 679, name: '其他'}
            ]
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
            data: [
              {value: 1048, name: '自然堂旗舰店'},
              {value: 335, name: 'abb专卖店'},
              {value: 310, name: '自然堂杭州专营店'},
              {value: 251, name: '屈臣氏官方旗舰店'},
              {value: 234, name: '屈臣氏广州专营店'},
              {value: 147, name: '梦梦家小店'},
              {value: 135, name: '自然堂上海专营店'},
              {value: 102, name: '其他'}
            ]
          }
        ]
      }

      myChart.setOption(option)
    }
  },
  mounted () {
    this.brandChart()
  }
}
</script>

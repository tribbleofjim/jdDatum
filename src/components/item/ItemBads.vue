<template>
    <div>
        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <span>商品缺点</span>
            </div>
            <div class="text item">
                <div class="block">
                    <wordcloud
                        :data="defaultWords"
                        nameKey="name"
                        valueKey="value"
                        :color="myColors"
                        :showTooltip="true"
                        :wordClick="wordClickHandler">
                    </wordcloud>
                </div>
                <div class="block">
                </div>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
 .box-card {
    width: 100%;
    height: 600px;
 }
 .el-row {
   padding-bottom: 20px;
 }
</style>

<script>
import wordcloud from 'vue-wordcloud'

export default {
  name: 'ItemBads',
  components: {wordcloud},
  methods: {
    wordClickHandler (name, value, vm) {
      console.log('wordClickHandler', name, value, vm)
    }
  },
  data () {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      defaultWords: [
        {
          'name': '噪音',
          'value': 26
        },
        {
          'name': '质量差',
          'value': 19
        },
        {
          'name': '快递太慢',
          'value': 18
        },
        {
          'name': '声音太大',
          'value': 16
        },
        {
          'name': '退货慢',
          'value': 15
        },
        {
          'name': '损坏',
          'value': 9
        },
        {
          'name': '残缺不全',
          'value': 9
        }
      ]
    }
  }
}
</script>

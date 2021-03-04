<template>
    <div>
        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <span>商品优点</span>
            </div>
            <div class="text item">
                <div class="block">
                    <wordcloud
                        :data="defaultWords"
                        nameKey="name"
                        valueKey="value"
                        :color="Accent"
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
    padding-bottom: 20px;
 }
</style>

<script>
import wordcloud from 'vue-wordcloud'

export default {
  name: 'ItemGoods',
  components: {wordcloud},
  methods: {
    wordClickHandler (name, value, vm) {
      console.log('wordClickHandler', name, value, vm)
    }
  },
  data () {
    return {
      defaultWords: [{
        'name': '正品',
        'value': 26
      },
      {
        'name': '效果好',
        'value': 19
      },
      {
        'name': '服务好',
        'value': 18
      },
      {
        'name': '颜色不错',
        'value': 16
      },
      {
        'name': '性能',
        'value': 15
      },
      {
        'name': '服务态度好',
        'value': 9
      },
      {
        'name': '很不错',
        'value': 9
      },
      {
        'name': '回购',
        'value': 9
      },
      {
        'name': '便宜',
        'value': 6
      }
      ]
    }
  }
}
</script>

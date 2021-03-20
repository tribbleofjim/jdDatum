<template>
    <div>
        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <span>商品优点</span>
            </div>
            <div class="text item">
              <el-row :gutter="20">
                <el-col :span="12">
                  <wordcloud
                      :data="defaultWords"
                      nameKey="name"
                      valueKey="value"
                      :color="Accent"
                      :showTooltip="true"
                      :wordClick="wordClickHandler">
                  </wordcloud>
                </el-col>
                <el-col :span="12">
                  <el-table
                    :data="this.comments"
                    stripe
                    highlight-current-row
                    @current-change="handleCurrentChange"
                    v-infinite-scroll="load"
                    style="width: 100%; overflow:auto">
                    <el-table-column
                      prop="nickname"
                      label="用户昵称"
                      width="80">
                    </el-table-column>
                    <el-table-column
                      prop="isPlus"
                      label="是否会员"
                      width="80">
                    </el-table-column>
                    <el-table-column
                      prop="content"
                      label="评论内容"
                      width="500">
                    </el-table-column>
                  </el-table>
                </el-col>
              </el-row>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
 .box-card {
    width: 100%;
    height: 600px;
    padding-bottom: 30px;
 }
 .block {
   width: 50%
 }
</style>

<script>
import wordcloud from 'vue-wordcloud'

export default {
  name: 'ItemGoods',
  components: {wordcloud},
  props: ['skuId'],
  methods: {
    wordClickHandler (name, value, vm) {
      console.log('wordClickHandler', name, value, vm)
    },
    async getWords () {
      const res = await this.$axios.get('/item/goods', {
        params: {
          'skuId': this.$props.skuId
        }
      })
      console.log(res)
      this.defaultWords = res.data.words
      this.comments = res.data.comments
    }
  },
  mounted () {
    this.getWords()
  },
  data () {
    return {
      comments: [],
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

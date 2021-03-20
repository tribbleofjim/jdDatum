<template>
    <div>
        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <span>商品缺点</span>
            </div>
            <div class="text item">
              <el-row :gutter="20">
                <el-col :span="12">
                  <wordcloud
                      :data="defaultWords"
                      nameKey="name"
                      valueKey="value"
                      :color="myColors"
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
 }
 .el-row {
   padding-bottom: 20px;
 }
 .block {
   width: 50%
 }
</style>

<script>
import wordcloud from 'vue-wordcloud'

export default {
  name: 'ItemBads',
  components: {wordcloud},
  props: ['skuId'],
  methods: {
    wordClickHandler (name, value, vm) {
      console.log('wordClickHandler', name, value, vm)
    },
    async getWords () {
      const res = await this.$axios.get('/item/bads', {
        params: {
          'skuId': this.$props.skuId
        }
      })
      // console.log(res)
      this.defaultWords = res.data.words
      this.comments = res.data.comments
    }
  },
  mounted () {
    this.getWords()
  },
  data () {
    return {
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
      comments: [],
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

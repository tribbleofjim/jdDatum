<template>
    <div>
        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <span>商品信息</span>
            </div>
            <div class="text item">
                <div class="block">
                    <el-avatar icon="el-icon-goods" shape="square" :size="50" :src="squareUrl"></el-avatar>
                </div>
                <el-divider>商品title</el-divider>
                <span>{{ this.title }}</span>
                <el-divider>商品品牌</el-divider>
                <span>{{ this.productClass }}</span>
                <el-divider>商品店铺</el-divider>
                <span>{{ this.shop }}</span>
                <el-divider>商品价格</el-divider>
                <span>{{ this.price }}</span>
                <el-divider>商品销量</el-divider>
                <span>{{ this.sellCount }}</span>
                <el-divider>商品icon</el-divider>
                <span>{{ this.icon }}</span>
                <div class="block">
                    <el-divider>商品推荐指数</el-divider>
                    <el-rate
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{this.recom}">
                    </el-rate>
                </div>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
 .box-card {
    width: 100%;
    height: 650px;
 }
</style>

<script>
export default {
  name: 'ItemInfo',
  props: ['skuId'],
  data () {
    return {
      recom: 0.0,
      keyword: '',
      title: '',
      price: '',
      shop: '',
      sellCount: '',
      icon: '',
      productClass: ''
    }
  },
  methods: {
    async getItemInfo () {
      const res = await this.$axios.get('/item/info', {
        params: {
          'skuId': this.$props.skuId
        }
      })
      this.recom = res.data.recom
      this.keyword = res.data.keyword
      this.title = res.data.title
      this.price = res.data.price
      this.shop = res.data.shop
      this.sellCount = res.data.sellCount
      this.icon = res.data.icon
      this.productClass = res.data.productClass
    }
  },
  mounted () {
    this.getItemInfo()
  }
}
</script>

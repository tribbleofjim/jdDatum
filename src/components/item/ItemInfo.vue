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
                <el-row>
                  <el-col :span="12">
                    <span class="info">商品title</span><br>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{ this.title }}</span><br>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="info">商品品牌</span><br>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{ this.productClass }}</span><br>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="info">商品店铺</span><br>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{ this.shop }}</span><br>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="info">商品价格</span><br>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{ this.price }}</span><br>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="info">商品销量</span><br>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{ this.sellCount }}</span><br>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="info">商品icon</span><br>
                  </el-col>
                  <el-col :span="12">
                    <span class="info">{{ this.icon }}</span><br>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <span class="info">商品推荐指数</span><br>
                  </el-col>
                  <el-col :span="12">
                    <div class="block info">
                        <el-rate
                            v-model="value"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template='{value}'>
                        </el-rate>
                    </div>
                  </el-col>
                </el-row>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
 .box-card {
    width: 100%;
    height: 650px;
 }
 .el-row {
   margin-top: 15px;
   margin-bottom: 30px;
 }
</style>

<script>
export default {
  name: 'ItemInfo',
  props: ['skuId'],
  data () {
    return {
      value: 0.0,
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
      this.value = res.data.recom
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

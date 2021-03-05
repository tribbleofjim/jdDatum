<template>
    <div>
      {{ '搜索商品:' + this.$route.params.keyword }}
        <el-table
      :data="tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%">
      <el-table-column
        prop="category"
        label="分类"
        width="200">
      </el-table-column>
      <el-table-column
        prop="title"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="price"
        label="商品价格"
        width="100">
      </el-table-column>
      <el-table-column
        prop="recom"
        label="商品推荐指数"
        width="100">
      </el-table-column>
      <el-table-column
        prop="skuId"
        label="skuId"
        width="180">
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
  name: 'ItemList',
  data () {
    return {
      tableData: [{
        category: '手机通讯-手机-手机-oppo',
        title: '12期免息+扫地机】OPPO Reno5 5G手机新品 全网通 游戏 拍照 reno5pro+ Reno5 星河入梦 （8+128G） 全网通（晒单返30）',
        price: 4500.00,
        recom: 3.7,
        skuId: 1347891
      }, {
        category: '手机通讯-手机-手机-小米(MI)',
        title: 'Redmi 9A 5000mAh大电量 大屏幕大字体大音量 1300万AI相机 八核处理器 人脸解锁 4GB+64GB 砂石黑 游戏智能手机 小米 红米',
        price: 599.00,
        recom: 2.4,
        skuId: 32457984
      }, {
        category: '手机通讯-手机-手机-Apple',
        title: 'Apple iPhone 12 (A2404) 128GB 白色 支持移动联通电信5G 双卡双待手机',
        price: 6799.00,
        recom: 4.6,
        skuId: 245348759238
      }]
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.$router.push({path: `/item/${val.skuId}`})
    }
  }
}
</script>

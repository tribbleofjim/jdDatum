<template>
    <div id="category">
      <el-divider><i class="el-icon-s-goods"></i>{{ '商品分类' + this.$route.params.cate }}</el-divider>
      <cate-brand />
      <cate-price />
      <cate-time />
    </div>
</template>

<script>
import CatePrice from './data/CatePrice.vue'
import CateTime from './data/CateTime.vue'
import CateBrand from './data/CateBrand.vue'

export default {
  components: { CatePrice, CateTime, CateBrand },
  name: 'Category',
  data () {
    return {
      cate: -1
    }
  }
}
</script>

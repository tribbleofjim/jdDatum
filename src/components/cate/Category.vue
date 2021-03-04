<template>
    <div id="category">
      <el-divider><i class="el-icon-s-goods"></i>{{ '商品分类' + this.$route.params.cate }}</el-divider>
      <cate-price />
    </div>
</template>

<script>
import CatePrice from './data/CatePrice.vue'

export default {
  components: { CatePrice },
  name: 'Category',
  data () {
    return {
      cate: -1
    }
  }
}
</script>

<template>
    <div id="category">
      <el-divider><i class="el-icon-s-goods"></i>{{ '商品分类' + this.$route.params.cate }}</el-divider>
    </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      cate: -1
    }
  }
}
</script>

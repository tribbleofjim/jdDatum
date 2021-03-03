<template>
    <div id="categories">
        <my-header />
        <el-row :gutter="20" class="cates">
            <div v-for="o in 8" :key="o">
                <el-col :span="5">
                    <el-card class="box-card" shadow="hover"  @click.native="goCategory(o)">
                        {{ '商品分类' + o }}
                    </el-card>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
import MyHeader from './MyHeader.vue'

export default {
  components: { MyHeader },
  name: 'Categories',
  methods: {
    goCategory (o) {
      this.$router.push({path: `/category/${o}`})
    }
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 250px;
    height: 400px;
  }

  .el-col {
      padding-bottom: 10px;
  }

  .cates {
      padding-left: 200px;
  }

</style>

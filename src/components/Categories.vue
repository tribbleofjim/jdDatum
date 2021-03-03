<template>
    <div id="categories">
        <el-row :gutter="20">
            <div v-for="o in 6" :key="o">
                <el-col :span="6" class="">
                    <el-card class="box-card" shadow="hover">
                        {{ '商品分类' + o }}
                    </el-card>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Categories'
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
    width: 320px;
    height: 400px;
  }

  .el-col {
      padding-bottom: 10px;
  }
</style>

<template>
    <div id="categories">
        <el-row :gutter="20" class="cates">
            <div v-for="o in 8" :key="o">
                <el-col :span="5" class="">
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

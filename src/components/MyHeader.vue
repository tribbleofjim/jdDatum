<template>
    <div id="my-header">
        <el-row>
            <el-col :span="6">
                jd-datum
            </el-col>
            <el-col :span="6">
                <el-input
                    id="keyword"
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="inputword"
                    @input="change($event)">
                </el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" plain @click.native="goItemList()">搜索</el-button>
            </el-col>
        </el-row>
        <el-divider></el-divider>
    </div>
</template>

<script>
export default {
  name: 'MyHeader',
  methods: {
    goItemList () {
      var keyword = document.getElementById('keyword').value
      if (keyword) {
        this.$router.push({path: `/itemList/${keyword}`})
      }
    },
    change (e) {
      this.$forceUpdate()
    }
  }
}
</script>

<style>
 .el-row {
     height: 30px;
 }
</style>

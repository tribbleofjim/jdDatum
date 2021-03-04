<template>
    <div id="my-header">
        <el-row>
            <el-col :span="6">
                jd-datum
            </el-col>
            <el-col :span="6">
                <el-input
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input2">
                </el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" plain @click.native="goItem()">搜索</el-button>
            </el-col>
        </el-row>
        <el-divider></el-divider>
    </div>
</template>

<script>
export default {
  name: 'MyHeader',
  methods: {
    goItem () {
      this.$router.push({path: `/item`})
    }
  }
}
</script>

<style>
 .el-row {
     height: 30px;
 }
</style>

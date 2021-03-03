<template>
    <div id="my-header">
        <el-row>
            <el-col :span="24">
                jd-datum
                <el-input
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input2">
                </el-input>
                <el-divider></el-divider>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

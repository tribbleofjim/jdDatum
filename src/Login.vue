<template>
    <div>
        <el-row>
            <el-col :span="6">
                登录
            </el-col>
            <el-col :span="6">
                <el-input
                    id="phone"
                    placeholder="请输入手机号码"
                    prefix-icon="el-icon-search"
                    v-model="inputword"
                    @input="change($event)">
                </el-input>
            </el-col>
            <el-col :span="6">
                <el-input
                    id="password"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-search"
                    v-model="inputword"
                    @input="change($event)">
                </el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" plain @click.native="login()">登录</el-button>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="6">
                注册
            </el-col>
            <el-col :span="6">
                <el-input
                    id="re_phone"
                    placeholder="请输入手机号码"
                    prefix-icon="el-icon-search"
                    v-model="inputword"
                    @input="change($event)">
                </el-input>
            </el-col>
            <el-col :span="6">
                <el-input
                    id="re_password"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-search"
                    v-model="inputword"
                    @input="change($event)">
                </el-input>
            </el-col>
            <el-col :span="6">
                <el-input
                    id="re_nickname"
                    placeholder="请输入昵称"
                    prefix-icon="el-icon-search"
                    v-model="inputword"
                    @input="change($event)">
                </el-input>
            </el-col>
            <el-col :span="2">
                <el-button type="primary" plain @click.native="register()">注册</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    async login () {
      const res = await this.$axios.post('/login', {
        params: {
          'phone': document.getElementById('phone').value,
          'password': document.getElementById('password').value
        }
      })
      console.log(res)
      this.$notify.success({
        title: '登录信息',
        message: res.message
      })
    },
    async register () {
      const res = await this.$axios.post('/register', {
        params: {
          'phone': document.getElementById('re_phone').value,
          'password': document.getElementById('re_password').value,
          'nickname': document.getElementById('re_nickname').value
        }
      })
      console.log(res)
      this.$notify.success({
        title: '注册信息',
        message: res.message
      })
    }
  }
}
</script>

<style>
 .el-row {
     height: 30px;
 }
</style>

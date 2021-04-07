<template>
    <div class="login">
      <el-row>
        <span style="font-family: Helvetica Neue; font-size: 20px Extra large;">jd-datum</span>
      </el-row>

      <el-row>
        <el-col :span="10" :offset="7">
          <el-form ref="form" :model="loginForm" label-width="80px">
            <el-form-item label="手机号">
              <el-input v-model="loginForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="loginForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login">登录</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
          <span>没有账号?</span>
          <el-button type="text" @click="register_visible = true">立即注册</el-button>
          <el-button type="text" @click="goIndex()">跳转首页</el-button>
        </el-col>
      </el-row>

      <el-dialog title="注册" :visible.sync="register_visible">
          <el-form ref="form" :model="registerForm">
            <el-form-item label="手机号">
              <el-input v-model="registerForm.phone" placeholder="请输入手机号" @input="change($event)"></el-input>
            </el-form-item>
            <el-form-item label="用户昵称">
              <el-input v-model="registerForm.nickname" placeholder="请输入用户昵称" @input="change($event)"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="registerForm.password" placeholder="请输入密码" show-password @input="change($event)"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="register_visible = false">取消</el-button>
            <el-button type="primary" @click="register()">提交</el-button>
          </div>
        </el-dialog>
    </div>
</template>
<style scoped>
  .title {
    font-family: Helvetica Neue;
    font-size: 20px Extra large;
  }
  .login {
    width: 100%;
    height: 600px;
    background-image: url("../assets/bule.gif");
  }
</style>
<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        phone: '',
        password: ''
      },
      registerForm: {
        phone: '',
        password: '',
        nickname: ''
      },
      register_visible: false
    }
  },
  methods: {
    async login () {
      const _this = this
      const res = await this.$axios.post('/login', {
        params: {
          'phone': this.loginForm.phone,
          'password': this.loginForm.password
        }
      })
      console.log(res)
      if (res.data.success) {
        _this.$cookies.set('user_phone')
        _this.$notify.success({
          title: '登录信息',
          message: res.data.message
        })
        _this.$router.push({path: `/categories`})
      } else {
        _this.$notify.error({
          title: '登录信息',
          message: res.data.message
        })
      }
    },
    async register () {
      const _this = this
      const res = await this.$axios.post('/register', {
        params: {
          'phone': this.registerForm.phone,
          'password': this.registerForm.password,
          'nickname': this.registerForm.nickname
        }
      })
      console.log(res)
      if (res.data.success) {
        _this.$notify.success({
          title: '注册信息',
          message: res.data.message
        })
      } else {
        _this.$notify.error({
          title: '注册信息',
          message: res.data.message
        })
      }
    },
    goIndex () {
      this.$router.push({path: `/categories`})
    }
  }
}
</script>

<style>
 .el-row {
     height: 30px;
 }
</style>

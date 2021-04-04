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
                <el-button type="primary" plain @click.native="goItemList()">搜索商品</el-button>
            </el-col>
            <el-col :span="10">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  用户操作<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="change_pass">修改密码</el-dropdown-item>
                  <el-dropdown-item command="change_nickname">修改昵称</el-dropdown-item>
                  <el-dropdown-item command="exit">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
        </el-row>
        <el-divider></el-divider>

        <el-popover
          placement="bottom"
          title="修改密码"
          width="200"
          trigger="manual"
          v-model="pass_visible">
          <el-form ref="form" :model="changePassForm">
            <el-form-item label="旧密码">
              <el-input v-model="changePassForm.oldPass" placeholder="请输入旧密码" show-password @input="change($event)"></el-input>
            </el-form-item>
            <el-form-item label="新密码">
              <el-input v-model="changePassForm.newPass" placeholder="请输入新密码" show-password @input="change($event)"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" icon="el-icon-s-promotion" @click="changePass()">提交</el-button>
          <el-button type="primary" icon="el-icon-close" @click="cancel('pass')">取消</el-button>
        </el-popover>

        <el-popover
          placement="top"
          title="修改昵称"
          width="200"
          trigger="manual"
          offset="4"
          v-model="nickname_visible">
          <el-form ref="form" :model="changeNickForm">
            <el-form-item label="密码">
              <el-input v-model="changeNickForm.password" placeholder="请输入密码" show-password @input="change($event)"></el-input>
            </el-form-item>
            <el-form-item label="新昵称">
              <el-input v-model="changeNickForm.newNickname" placeholder="请输入新昵称" show-password @input="change($event)"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" icon="el-icon-s-promotion" @click="changeNickname()">提交</el-button>
          <el-button type="primary" icon="el-icon-close" @click="cancel('nickname')">取消</el-button>
        </el-popover>
    </div>
</template>

<style>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      pass_visible: false,
      nickname_visible: false,
      changePassForm: {
        oldPass: '',
        newPass: ''
      },
      changeNickForm: {
        password: '',
        newNickname: ''
      }
    }
  },
  methods: {
    goItemList () {
      var keyword = document.getElementById('keyword').value
      if (keyword) {
        this.$router.push({path: `/itemList/${keyword}`})
      }
    },
    change (e) {
      this.$forceUpdate()
    },
    handleCommand (command) {
      if (command === 'change_pass') {
        this.pass_visible = true
      } else if (command === 'change_nickname') {
        this.nickname_visible = true
      } else {
        this.$axios.post('exitLogin', {
          params: {
            phone: this.$cookies.get('user_phone')
          }
        })
        this.$cookies.remove('user_phone')
      }
    },
    cancel (command) {
      if (command === 'pass') {
        this.pass_visible = false
      } else if (command === 'nickname') {
        this.nickname_visible = false
      }
    },
    changePass () {
      this.$axios.post('modifyPassword', {
        params: {
          phone: this.$cookies.get('user_phone'),
          oldPass: this.changePassForm.oldPass,
          newPass: this.changePassForm.newPass
        }
      })
    },
    changeNickname () {
      this.$axios.post('modifyNickname', {
        params: {
          phone: this.$cookies.get('user_phone'),
          password: this.changeNickForm.password,
          newNickname: this.changeNickForm.newNickname
        }
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

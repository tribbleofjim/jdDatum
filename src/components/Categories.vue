<template>
    <div id="categories">
        <my-header />
        <el-row :gutter="20" class="cates">
            <div v-for="o in this.categories" :key="o">
                <el-col :span="5">
                    <el-card class="box-card" shadow="hover"  @click.native="goCategory(o)">
                        {{ o }}
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
  data () {
    return {
      'categories': []
    }
  },
  methods: {
    async getCategories () {
      const res = await this.$axios.get('/categories', {})
      if (res.data.success) {
        this.categories = res.data.model
      } else {
        this.$notify.error({
          title: '获取商品分类错误',
          message: res.data.message
        })
      }
    },
    goCategory (o) {
      this.$router.push({path: `/category/${o}`})
    }
  },
  mounted () {
    this.getCategories()
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
    height: 100px;
  }

  .el-col {
      padding-bottom: 10px;
  }

  .cates {
      padding-left: 200px;
  }

</style>

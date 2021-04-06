<template>
    <div id="categories">
        <my-header />
        <el-row :gutter="20" class="cates">
            <div v-for="(o, index) in this.categories" :key="o">
                <el-col :span="5">
                    <el-card class="box-card" shadow="hover"  @click.native="goCategory(o)">
                      <font-awesome-icon :icon=icons[index] size="3x"/><br>
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
      'categories': [],
      'icons': ['paint-brush', 'tractor', 'school', 'toilet-paper', 'gifts', 'book', 'guitar', 'mobile-alt',
        'tv', 'baby', 'shoe-prints', 'dog', 'hamburger', 'laptop', 'camera-retro', 'car-side', 'tshirt', 'briefcase-medical',
        'pump-soap', 'archive', 'utensils', 'couch', 'skiing-nordic', 'truck', 'suitcase-rolling', 'clock', 'wine-glass-alt',
        'people-carry', 'charging-station', 'fish', 'umbrella-beach', 'feather-alt', 'warehouse']
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

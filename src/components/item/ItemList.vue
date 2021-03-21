<template>
    <div>
      <el-row>
        {{ '搜索:' + this.$route.params.keyword }}
      </el-row>
      <el-row gutter="40">
        <el-col :span="3">
          <el-select v-model="nums_value" placeholder="选择展示条数">
            <el-option
              v-for="item in nums"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <el-select v-model="price_value" placeholder="筛选价格">
            <el-option
              v-for="item in priceInterval"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" icon="el-icon-refresh-right" @click="refresh()">刷新</el-button>
        </el-col>
      </el-row>
      <div>
        <el-table
      :data="this.tableData"
      highlight-current-row
      @current-change="handleCurrentChange"
      v-infinite-scroll="load"
      style="width: 100%; overflow:auto">
      <el-table-column
        prop="productClass"
        label="分类"
        width="220">
      </el-table-column>
      <el-table-column
        prop="title"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="price"
        label="商品价格"
        width="100">
      </el-table-column>
      <el-table-column
        prop="skuId"
        label="skuId"
        width="180">
      </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ItemList',
  data () {
    return {
      tableData: [],
      nums: [{
        value: '20',
        label: '20'
      }, {
        value: '40',
        label: '40'
      }, {
        value: '60',
        label: '60'
      }, {
        value: '80',
        label: '80'
      }, {
        value: '100',
        label: '100'
      }],
      priceInterval: [{
        value: '默认',
        label: '默认'
      },
      {
        value: '0-100',
        label: '0-100'
      }, {
        value: '100-500',
        label: '100-500'
      }, {
        value: '500-1000',
        label: '500-1000'
      }, {
        value: '1000以上',
        label: '1000以上'
      }],
      nums_value: '',
      price_value: ''
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.$router.push({path: `/item/${val.skuId}`})
    },
    async searchItems () {
      const items = await this.$axios.get('/item/search', {
        params: {
          'keyword': this.$route.params.keyword
        }
      })
      this.tableData = items.data
    },
    load () {
      this.count += 2
    },
    async refresh () {
      const res = await this.$axios.get('/item/search', {
        params: {
          'keyword': this.$route.params.keyword,
          'size': this.nums_value,
          'price_interval': this.price_value
        }
      })
      console.log(res)
      this.tableData = res.data
    }
  },
  mounted () {
    this.searchItems()
  }
}
</script>

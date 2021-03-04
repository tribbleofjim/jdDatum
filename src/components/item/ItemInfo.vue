<template>
    <div class="item">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商品信息</span>
            </div>
            <div class="text item">
                <div class="block">
                    <el-avatar icon="el-icon-goods" shape="square" :size="50" :src="squareUrl"></el-avatar>
                </div>
                {{ '商品名称' }}
                <div class="block">
                商品推荐指数
                <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                </el-rate>
            </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'ItemInfo',
  data () {
    return {
      value: 3.7
    }
  }
}
</script>

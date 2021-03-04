<template>
    <div>
        <el-card class="box-card" shadow="hover">
            <div slot="header" class="clearfix">
                <span>商品信息</span>
            </div>
            <div class="text item">
                <div class="block">
                    <el-avatar icon="el-icon-goods" shape="square" :size="50" :src="squareUrl"></el-avatar>
                </div>
                <el-divider>商品title</el-divider>
                <span>{{ '【12期免息+扫地机】OPPO Reno5 5G手机新品 全网通 游戏 拍照 reno5pro+ Reno5 星河入梦 （8+128G） 全网通（晒单返30）' }}</span>
                <div class="block">
                    <el-divider>商品推荐指数</el-divider>
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

<style scoped>
 .box-card {
    width: 100%;
 }
</style>

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

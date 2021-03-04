<template>
    <div>
        <el-row>
            <el-col :span="24">
                <item-info />
            </el-col>
            <el-col :span="24">
                <item-goods />
            </el-col>
            <el-col :span="24">
                <item-bads />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ItemBads from './ItemBads.vue'
import ItemGoods from './ItemGoods.vue'
import ItemInfo from './ItemInfo.vue'

export default {
  components: {ItemInfo, ItemGoods, ItemBads}
}
</script>

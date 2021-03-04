<template>
    <div>
        <!-- <el-row :gutter="20">
            <el-col :span="12">
                <item-info />
                <item-data />
            </el-col>
            <el-col :span="12">
                <item-goods />
                <item-bads />
            </el-col>
        </el-row> -->
        <item-info />
        <item-data />
        <item-goods />
        <item-bads />
    </div>
</template>

<script>
import ItemBads from './ItemBads.vue'
import ItemData from './ItemData.vue'
import ItemGoods from './ItemGoods.vue'
import ItemInfo from './ItemInfo.vue'

export default {
  components: {ItemInfo, ItemGoods, ItemBads, ItemData}
}
</script>

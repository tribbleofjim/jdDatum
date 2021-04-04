<template>
    <div>
        <item-info :skuId='this.$route.params.skuId'/>
        <item-data :skuId='this.$route.params.skuId'/>
        <item-goods :skuId='this.$route.params.skuId'/>
        <item-bads :skuId='this.$route.params.skuId'/>
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

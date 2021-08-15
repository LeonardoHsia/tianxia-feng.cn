<template>
    <div>
        <ul v-if="list.length" class="list">
            <list-item-cmpt v-for="(field, idx) in list" :key="idx" :data="data" :fieldConf="field"></list-item-cmpt>
        </ul>
    </div>
</template>

<script>
import ListItemCmpt from './ListItemCmpt.vue'

export default {
    name: '',
    props: {
        data: {
            type: Object,
            default: () => {}
        },
        list: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {}
    },
    components: {
        'list-item-cmpt': ListItemCmpt
    }
}
</script>

<style lang="scss" scoped>
.list {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>

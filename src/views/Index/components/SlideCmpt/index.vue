<template>
    <div>
        <slide-cmpt-item v-for="(item, idx) in items" :key="idx" :item="item">
            <!-- <div></div> -->
        </slide-cmpt-item>
    </div>
</template>

<script>
import SlideCmptItem from './SlideCmptItem.vue'
export default {
    name: '',
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },
    components: {
        'slide-cmpt-item': SlideCmptItem
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss">

</style>

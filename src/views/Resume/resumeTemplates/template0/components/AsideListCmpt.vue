<template>
    <div class="aside-list-cmpt">
        <list-cmpt :data="data" :conf="conf" :list="list"></list-cmpt>
    </div>
</template>

<script>
import ListCmpt from './ListCmpt'
import mixins from '@resume/mixins'
export default {
    name: '',
    mixins,
    components: {
        'list-cmpt': ListCmpt
    },
    data () {
        return { }
    },
    computed: {
        list () {
            return this.conf.fields.filter(f => f.onStage && this.data[f.field] !== undefined)
        }
    },
    methods: {
        onEdit (e) {
            console.log('onEdit', e)
        }
    }
}
</script>

<style lang="scss">
@import '../scss/template.scss';

</style>

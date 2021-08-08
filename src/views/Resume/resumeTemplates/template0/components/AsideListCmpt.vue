<template>
    <div class="aside-list-cmpt">
        <list-cmpt :data="data" :conf="conf"></list-cmpt>
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

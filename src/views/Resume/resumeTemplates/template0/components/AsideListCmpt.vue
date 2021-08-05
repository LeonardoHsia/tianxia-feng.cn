<template>
    <div class="aside-list ">
        <list-cmpt :data="data" :conf="conf"></list-cmpt>
    </div>
</template>

<script>
import ListCmpt from './ListCmpt'
export default {
    name: '',
    props: {
        conf: {
            type: Object,
            default: () => ({
                title: '',
                root: '',
                fields: []
            })
        },
        data: {
            type: Object,
            default: () => {}
        }
    },
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

<template>
    <div class="aside-list section" :class="{'hover': showEdit}" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <i class="el-icon-edit-outline edit-icon" v-if="isEditable && showEdit" @click="editFunc"></i>
        <div>
            <h2 class="section-title">{{ conf.title }}</h2>
            <list-cmpt :data="data" :conf="conf"></list-cmpt>
        </div>
    </div>
</template>

<script>
import ListCmpt from './ListCmpt'
import { mapGetters } from 'vuex'
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
        },
        editFunc: {
            type: Function,
            default: () => {}
        }
    },
    components: {
        'list-cmpt': ListCmpt
    },
    computed: {
        ...mapGetters(['isEditable'])
    },
    data () {
        return {
            showEdit: false
        }
    },
    methods: {
        onMouseEnter () {
            if (this.isEditable) {
                this.showEdit = true
            }
        },
        onMouseLeave () {
            this.showEdit = false
        }
    }
}
</script>

<style lang="scss">
@import '../scss/template.scss';

</style>

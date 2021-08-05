<template>
    <div class="section" :class="{'hover': isHover}" @mouseenter="isHover=true" @mouseleave="isHover=false">
        <div class="button-group">
            <el-button type="text" icon="el-icon-edit" title="编辑" class="edit-icon" v-if="isHover && isEditable" @click="editFunc"></el-button>
            <el-button type="text" icon="el-icon-rank" title="移动" class="move-icon"  v-if="isHover && movable"></el-button>
        </div>
        <h2 class="section-title" v-if="conf.title">{{ conf.title }}</h2>
        <slot></slot>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: '',
    props: {
        title: {
            type: String,
            default: ''
        },
        movable: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        ...mapGetters(['isEditable'])
    },
    data () {
        return {
            isHover: false,
            conf: {},
            defaultSlot: null
        }
    },
    mounted () {
        this.getDefaultSlot()
    },
    methods: {
        getDefaultSlot () {
            const defaultSlots = this.$slots.default
            if (defaultSlots.length > 1) {
                throw new Error('Component \'SectionBox\' can only has one single default slot')
            } else {
                this.defaultSlot = defaultSlots[0].child
            }
        },
        editFunc (e) {
            const { onEdit } = this.defaultSlot
            onEdit instanceof Function && onEdit(e)
        }
    },
    watch: {
        defaultSlot (val) {
            let conf = {}
            if (val) {
                conf = val.conf
            }
            this.conf = conf
        }
    }
}
</script>

<style lang="scss">
@import '../scss/template.scss';
.section {
    position: relative;
    border: 1px dashed transparent;
    background: transparent;
    padding: 1rem 1.5rem;
    width: 100%;

    .section-title {
        font-size: 1.2rem;
        margin-top: .5rem;
        margin-bottom: 1rem;
    }

    &.hover {
        border-color: #333;
        background: #ddd;
    }

    .edit-icon, .move-icon {
        cursor: pointer;
        margin: 0 .2rem;
        font-size: 1.2em;
        border: 1px solid;
        padding: .2rem;
    }
}

.button-group {
    position: absolute;
    top: 1rem;
    right: 1rem;
}
</style>

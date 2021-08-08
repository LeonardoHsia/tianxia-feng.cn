<template>
    <div class="section" :class="{'hover': isHover}" @mouseenter="isHover=true" @mouseleave="isHover=false" v-if="showFlag">
        <div class="button-group">
            <el-button type="text" icon="el-icon-edit" title="编辑" class="edit-icon" v-if="isHover && isEditable" @click="onEdit"></el-button>
            <el-button type="text" icon="el-icon-rank" title="移动" class="move-icon"  v-if="isHover && movable"></el-button>
        </div>
        <h2 class="section-title" v-if="conf.title">{{ conf.title }}</h2>
        <slot></slot>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('Resume')

export default {
    name: '',
    provide () {
        return {
            hideSectionProvide: this.onHide,
            onEdit: this.onEdit,
            setSectionConfProvide: this.setConf
        }
    },
    props: {
        movable: {
            type: Boolean,
            default: true
        }
    },
    created () {
        // bus.$on('onHide', this.onHide)
    },
    computed: {
        ...mapGetters(['isEditable'])
    },
    data () {
        return {
            isHover: false,
            conf: {},
            showFlag: true
        }
    },
    mounted () {
        // this.getDefaultSlot()
    },
    methods: {
        setConf (conf) {
            Object.keys(conf).forEach(k => {
                this.$set(this.conf, k, conf[k])
            })
        },
        onEdit () {

        },
        onHide () {
            this.showFlag = false
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
    cursor: default;

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

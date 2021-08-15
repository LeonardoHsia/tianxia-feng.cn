<template>
    <li class="list-item">
        <label>{{ label }}：</label>
        <template v-if="!onStage.isHtml">
            <span>{{ value }}</span>
        </template>
       <template v-else>
           <span v-html="value"></span>
       </template>
    </li>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('Resume')

export default {
    name: 'ListItemCmpt',
    props: {
        fieldConf: {
            type: Object,
            default: () => {}
        },
        data: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        ...mapGetters(['isEditable']),
        onStage () {
            return this.fieldConf.onStage
        },
        label () {
            const { label: labelFn } = this.onStage
            if (labelFn) {
                if (labelFn instanceof Function) {
                    return labelFn(this.fieldConf.field)
                } else {
                    return String(labelFn)
                }
            } else {
                return this.fieldConf.label
            }
        },
        value () {
            const { value: valueFn } = this.onStage
            if (valueFn) {
                if (valueFn instanceof Function) {
                    return valueFn(this.data[this.fieldConf.field])
                } else {
                    return String(valueFn)
                }
            } else {
                return this.data[this.fieldConf.field]
            }
        }
    },
    data () {
        return {
            showDelete: false
        }
    },
    methods: {
        onMouseEnter () {
            if (this.isEditable) {
                this.showDelete = true
            }
        },
        onMouseLeave () {
            this.showDelete = false
        },
        onDelete (e) {
            this.$emit('delete', this.fieldConf.field)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@resume/static/scss/_variable';

.list-item {
    position: relative;
    padding: .2rem .4rem;

    &:hover {
        background: rgba(0,0,0,0.1);
    }

    & > label, & > span {
        cursor: inherit;
    }

    .delete-icon {
        border-radius: 50%;
        background: red;
        color: white;
        position: absolute;
        top: 0;
        left: 100%;
        transform: translate(-50%, -50%) scale(0.7);
    }

}
</style>

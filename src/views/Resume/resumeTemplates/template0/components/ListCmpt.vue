<template>
    <div>
        <ul v-if="list.length" class="list" :class="{'editable': isEditable}">
            <list-item-cmpt v-for="(field, idx) in list" :key="idx" :data="data" :fieldConf="field" @delete="showDeleteListItemDialog"></list-item-cmpt>
        </ul>
        <el-dialog class="delete-list-item-dialog" ref="deleteListItem" title="是否删除此字段" :visible.sync="deleteListItemVisible" width="20%">
            <span slot="footer">
                <el-checkbox v-model="deleteSilently" style="float: left;">
                    不再提醒
                </el-checkbox>
                <el-button @click="hideDeleteListItemDialog">取 消</el-button>
                <el-button type="primary" @click="confirmDelete">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import ListItemCmpt from './ListItemCmpt.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('Resume')

export default {
    name: '',
    props: {
        conf: {
            type: Object,
            default: () => {}
        },
        data: {
            type: Object,
            default: () => {}
        },
        list: {
            type: Array,
            default: () => []
        }
    },
    components: {
        'list-item-cmpt': ListItemCmpt
    },
    created () {
        this.deleteSilently = this.isDeleteSilently === 'true'
    },
    computed: {
        ...mapGetters(['isEditable', 'isDeleteSilently']),
        root () {
            return this.conf.root
        }
    },
    data () {
        return {
            deleteListItemVisible: false,
            deleteSilently: false,
            toDeleteField: ''
        }
    },
    methods: {
        ...mapActions(['modifyResumeInfo']),
        ...mapMutations(['SET_DELETE_SILENTLY']),
        showDeleteListItemDialog (field) {
            this.toDeleteField = field
            // 静默删除
            if (this.deleteSilently) {
                this.confirmDelete()
            } else {
                this.deleteListItemVisible = true
            }
        },
        hideDeleteListItemDialog () {
            this.deleteListItemVisible = false
        },
        confirmDelete () {
            this.hideDeleteListItemDialog()
            this.modifyResumeInfo({ method: 'delete', namespace: this.root, key: this.toDeleteField })
            if (this.deleteSilently) {
                this.SET_DELETE_SILENTLY(this.deleteSilently)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.list {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &.editable {
        .list-item {
            cursor: pointer;
            user-select: none;
        }
    }
}

.delete-list-item-dialog {
    /deep/.el-dialog__body {
        padding: .8rem;
    }
}
</style>

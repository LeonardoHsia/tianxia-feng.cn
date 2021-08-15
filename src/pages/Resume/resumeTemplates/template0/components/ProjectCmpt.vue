<template>
    <li class="project-item" @click="jumpToProject" :class="{'href-valid': this.hrefValid}">
        <h3 class="inner-title">
            <span>
                {{ data.start | formatTime }} - {{ data.end | formatTime }}
            </span>
            <span>
                <i class="el-icon el-icon-s-flag href-tag" v-if="this.hrefValid" title="Try to Click"></i>
                {{ data.project | formatStr }}
            </span>
        </h3>
        <p class="inner-sub-title">
            <span>
                {{ data.station | formatStr }}
            </span>
        </p>
        <content-cmpt :data="data.content" :conf="conf" ></content-cmpt>
    </li>
</template>

<script>
import ContentCmpt from './ContentCmpt'
import created from '@resume/mixins/createdMixin'
import inject from '@resume/mixins/injectMixin_temp'
import props from '@resume/mixins/propsMixin'
export default {
    name: '',
    mixins: [created, inject, props],
    data () {
        return {
            count: 0
        }
    },
    components: {
        'content-cmpt': ContentCmpt
    },
    computed: {
        href () {
            return this.data.href
        },
        hrefValid () {
            return this.href && this.href !== '#'
        }
    },
    filters: {
        formatTime (v) {
            const t = new Date(v)
            return `${t.getFullYear()}/${t.getMonth()}`
        },
        formatStr (v) {
            return v || ''
        }
    },
    methods: {
        jumpToProject () {
            if (this.hrefValid) {
                this.$confirm(`即将离开页面跳转到项目《${this.data.project || ''}》的展示和Demo`, '跳转提示').then(() => {
                    this.$router.push(this.href)
                }).catch(() => {
                    this.$message({
                        showClose: true,
                        message: '取消'
                    })
                })
            } else {
                if (this.count < 5) {
                    this.count++
                } else {
                    this.$message({
                        showClose: true,
                        type: 'warning',
                        message: 'Sorry，这个项目真的没有Demo可以看，不要再点了...'
                    })
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@resume/static/scss/_variable';
.project-item {
    cursor: default;

    &.href-valid {
        cursor: pointer;
    }
}
</style>

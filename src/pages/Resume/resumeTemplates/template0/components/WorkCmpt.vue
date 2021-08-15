<template>
    <li class="work-item">
        <h3 class="inner-title">
            <span>
                {{ data.start | formatTime }} - {{ data.end | formatTime }}
            </span>
            <span>
                {{ data.company | formatStr }}
            </span>
        </h3>
        <p class="inner-sub-title">
            <span>
                {{ stationAndIndustry }}
            </span>
            <span>
                {{ data.salary || "保密" }}
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
        return { }
    },
    components: {
        'content-cmpt': ContentCmpt
    },
    computed: {
        stationAndIndustry () {
            const { station = '', industry = '' } = this.data
            return station + (station ? ' | ' : '') + industry
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
    }
}
</script>

<style lang="scss" scoped>

</style>

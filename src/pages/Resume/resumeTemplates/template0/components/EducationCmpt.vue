<template>
    <li class="education-item">
        <h3 class="inner-title">
            <span>
                {{ data.start | formatTime }} - {{ data.end | formatTime }}
            </span>
            <span>
                {{ data.school | formatStr }}
            </span>
        </h3>
        <p class="inner-sub-title">
            {{ diplomaAndMajor }}
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
        diplomaAndMajor () {
            const { diploma = '', major = '' } = this.data
            return major + (major ? ' | ' : '') + diploma
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

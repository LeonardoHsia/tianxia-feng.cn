<template>
    <div class="content-cmpt">
        <template v-if="text && data.introducePoints.length"></template>
        <button @click="hideSection">Test</button>
        <button @click="setSectionConf">conf</button>
    </div>
</template>

<script>
import mixins from '@resume/mixins'

export default {
    name: 'selfIntroduction',
    mixins,
    created () {
        const { introduceText: text, introducePoints: list } = this.data
        this.text = text && text.length ? text : ''
        this.list = list && list.length ? list : []
    },
    data () {
        return {
            text: '',
            list: []
        }
    },
    methods: {
        hideSection () {
            this.hideSectionProvide()
        },
        setSectionConf () {
            this.setSectionConfProvide(this.conf)
        }
    },
    computed: {
        show () {
            const show = this.text && this.list.length
            return show
        }
    }
}
</script>

<style lang="scss">

</style>

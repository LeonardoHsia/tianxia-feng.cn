<template>
    <div class="content-cmpt">
        <template v-if="text">
            {{ text }}
        </template>
        <template v-if="list.length">
            <ul class="list">
                <li v-for="(item, idx) of list" :key="idx">
                    {{ item }}
                </li>
            </ul>
        </template>
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
        setSectionConf () {
            this.setSectionConfProvide(this.conf)
        }
    },
    computed: {
        show () {
            return this.text && this.list.length
        }
    },
    watch: {
        show (val) {
            if (!val) {
                this.hideSectionProvide()
            }
        }
    }
}
</script>

<style lang="scss">

</style>

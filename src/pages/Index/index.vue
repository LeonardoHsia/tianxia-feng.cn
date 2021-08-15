<template>
    <div class="router-view">
        <page-section-cmpt>
            <slide-cmpt :items="slideCmptItems"></slide-cmpt>
        </page-section-cmpt>
        <page-section-cmpt>
            <template slot="header">关注我们</template>
            <about-cmpt></about-cmpt>
        </page-section-cmpt>
    </div>
</template>

<script>
import PageSectionCmpt from '@components/PageSectionCmpt'
import SlideCmpt from './components/SlideCmpt'
import AboutCmpt from './components/AboutCmpt'

export default {
    name: '',
    components: {
        SlideCmpt,
        'page-section-cmpt': PageSectionCmpt,
        'about-cmpt': AboutCmpt
    },
    data () {
        return {
            slideCmptItems: [
                {
                    color: '#111111'
                }, {
                    color: '#222222'
                }, {
                    color: '#333333'
                }, {
                    color: '#444444'
                }
            ]
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
body {
    margin: 0;
    color: #404040;
}
.rooter-view {
    width: 100%;
}
</style>

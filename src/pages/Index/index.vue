<template>
    <div class="router-view">
        <page-section>
            <slide-cmpt :items="slideCmptItems"></slide-cmpt>
        </page-section>
        <page-section>
            <template slot="header">关注我们</template>
            <about-cmpt></about-cmpt>
        </page-section>
    </div>
</template>

<script>
import PageSection from '@components/PageSection'
import SlideCmpt from './components/SlideCmpt'
import AboutCmpt from './components/About'

export default {
    name: '',
    components: {
        SlideCmpt,
        'page-section': PageSection,
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

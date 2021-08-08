<template>
    <div class="template">
        <aside class="part">
            <photo-box-cmpt :data="basicInfo"></photo-box-cmpt>
            <section-box>
                <aside-list-cmpt :data="basicInfo" :conf="basicInfoConfs"></aside-list-cmpt>
            </section-box>
            <section-box>
                <aside-list-cmpt :data="jobIntention" :conf="jobIntentionConfs"></aside-list-cmpt>
            </section-box>
        </aside>
        <section class="part">
            <div class="empty-block"></div>
        </section>
    </div>
</template>

<script>
import SectionBox from './components/SectionBox'
import PhotoBoxCmpt from './components/PhotoBoxCmpt'
import AsideListCmpt from './components/AsideListCmpt'

import BasicInfoConfs from './configs/basicInfoFields'
import JobIntentionConfs from './configs/jobIntentionFields'

export default {
    name: '',
    props: {
        resumeInfo: {
            type: Object,
            default: () => {}
        }
    },
    created () {
        Object.keys(this.resumeInfo).forEach(k => {
            Object.assign(this, {
                [k]: this.resumeInfo[k]
            })
        })
    },
    components: {
        'section-box': SectionBox,
        'photo-box-cmpt': PhotoBoxCmpt,
        'aside-list-cmpt': AsideListCmpt
    },
    data () {
        return {
            basicInfoConfs: BasicInfoConfs,
            jobIntentionConfs: JobIntentionConfs,
            basicInfo: {},
            jobIntention: {}
        }
    },
    mounted () {

    }
}
</script>

<style lang="scss" scoped>
@import '@resume/static/scss/common.scss';

.template {
    border-top: 1rem solid $themeColor;
    .part {
        padding: 1rem;
    }
    aside {
        background: #CACACA;
    }
}

</style>

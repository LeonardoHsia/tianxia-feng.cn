<template>
    <div class="template">
        <aside class="part aside-part">
            <photo-box-cmpt :data="data.basicInfo"></photo-box-cmpt>
            <section-box>
                <aside-list-cmpt :data="data.basicInfo" :conf="confs.BasicInfoConf"></aside-list-cmpt>
            </section-box>
            <section-box>
                <aside-list-cmpt :data="data.jobIntention" :conf="confs.JobIntentionConf"></aside-list-cmpt>
            </section-box>
            <section-box>
                <content-cmpt :data="data.selfIntroduction" :conf="confs.SelfIntroductionConf"></content-cmpt>
            </section-box>
        </aside>
        <section class="part section-part">

        </section>
    </div>
</template>

<script>
import SectionBox from './components/SectionBox'
import PhotoBoxCmpt from './components/PhotoBoxCmpt'
import AsideListCmpt from './components/AsideListCmpt'
import ContentCmpt from './components/ContentCmpt'

import confs from './configs'

export default {
    name: '',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    created () {
        // set all grouped data
        Object.keys(this.data).forEach(k => {
            Object.assign(this, {
                [k]: this.data[k]
            })
        })

        // set confs of all grouped fields
        Object.keys(confs).forEach(k => {
            this.$set(this.confs, k, confs[k])
        })
    },
    components: {
        'section-box': SectionBox,
        'photo-box-cmpt': PhotoBoxCmpt,
        'aside-list-cmpt': AsideListCmpt,
        'content-cmpt': ContentCmpt
    },
    data () {
        return {
            confs: {}
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
    width: 60%;
    min-width: 72rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-content: stretch;

    .part {
        padding: 1rem;

        &.aside-part {
            flex-basis: 30%;
            background: #CACACA;
        }

        &.section-part {
            flex-basis: 70%;
            flex-grow: 1;
        }
    }

}

</style>

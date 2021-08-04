<template>
    <div class="template">
        <aside>
            <photo-box-cmpt :data="resumeInfo.basicInfo"></photo-box-cmpt>
            <aside-list-cmpt :data="resumeInfo.basicInfo" :conf="basicInfoConfs"></aside-list-cmpt>
            <aside-list-cmpt :data="resumeInfo.jobIntention" :conf="jobIntentionConfs"></aside-list-cmpt>
        </aside>
        <section>
            <div class="empty-block"></div>
        </section>
    </div>
</template>

<script>
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
    components: {
        'photo-box-cmpt': PhotoBoxCmpt,
        'aside-list-cmpt': AsideListCmpt
    },
    data () {
        return {
            basicInfoConfs: BasicInfoConfs,
            jobIntentionConfs: JobIntentionConfs
        }
    },
    mounted () {
        // console.log(this.resumeInfo)
    }
}
</script>

<style lang="scss">
aside {
    background: #CACACA;
}
</style>

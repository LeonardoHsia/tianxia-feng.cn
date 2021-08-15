<template>
    <div class="paragraph-cmpt">
        <ul class="paragraph-list">
            <component class="inner-section" :is="getCmpt" v-for="(item, idx) in data" :key="idx" :data="item" :conf="conf"></component>
        </ul>
    </div>
</template>

<script>
import mixins from '@resume/mixins'
import EducationCmpt from './EducationCmpt'
import WorkCmpt from './WorkCmpt'
import ProjectCmpt from './ProjectCmpt'
export default {
    name: 'ParagraphCmpt',
    mixins,
    created () {
        if (this.setSectionItemSize instanceof Function) {
            this.setSectionItemSize((this.data && this.data.length) ? this.data.length : 0)
        }
    },
    props: {
        data: {
            type: Array,
            default: () => []
        },
        innerCmpt: {
            type: String,
            default: 'education'
        }
    },
    computed: {
        getCmpt () {
            switch (this.innerCmpt) {
            case 'work':
                return 'work-cmpt'
            case 'project':
                return 'project-cmpt'
            default:
                return 'education-cmpt'
            }
        }
    },
    components: {
        'education-cmpt': EducationCmpt,
        'work-cmpt': WorkCmpt,
        'project-cmpt': ProjectCmpt
    },
    data () {
        return { }
    }
}
</script>

<style lang="scss" scoped>
@import '@resume/resumeTemplates/template0/scss/innerSection.scss';
</style>
<style lang="scss">
.paragraph-list {
    list-style: none;
    padding-left: 0;
}
</style>

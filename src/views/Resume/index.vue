<template>
    <div>
        <el-select v-model="currentTemplateId" placeholder="请选择">
            <el-option v-for="item in templates" :key="item.id" :value="item.id" :label="item.label"></el-option>
        </el-select>
        <component :is="currentTemplate" :resumeInfo="resumeInfo" :editable="editable"></component>
    </div>
</template>

<script>
import { TEMPLATES } from './consts'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Resume',
    components: Object.assign({}, ...TEMPLATES.map(({ name, label }) => (
        { [name]: () => import(`./resumeTemplates/${name}`) })
    )),
    created () {
        let { templateId, resumeData } = localStorage
        let resumeInfo = null
        if (resumeData) {
            try {
                resumeInfo = JSON.parse(resumeData)
            } catch (error) {
                throw new Error('Localstorage中的值不是JSON格式')
            }
            this.setResumeInfo(this.resumeInfo)
        } else {
            resumeInfo = this.getResumeInfo
        }

        this.resumeInfo = resumeInfo
        if (!templateId) {
            templateId = 0
        }
        localStorage.setItem('templateId', templateId)
        this.currentTemplateId = +templateId
        this.switchTemplate()

        // 展示信息静默删除初始化
        this.SET_DELETE_SILENTLY(this.$cookieUtil.getCookie('deleteSilently'))
    },
    data () {
        return {
            editable: true,
            templates: TEMPLATES,
            resumeInfo: {},
            currentTemplate: '',
            currentTemplateId: 0
        }
    },
    methods: {
        ...mapActions(['setResumeInfo']),
        ...mapMutations(['SET_DELETE_SILENTLY']),
        switchTemplate (v = this.currentTemplateId) {
            const { name } = TEMPLATES.find(({ id }) => id === +v) || TEMPLATES[0]
            this.currentTemplate = name
        }
    },
    computed: {
        ...mapGetters(['getResumeInfo'])
    },
    watch: {
        getResumeInfo (v) {
            this.resumeInfo = v
        },
        currentTemplateId (v) {
            if (!isNaN(+v)) {
                const { name } = TEMPLATES.find(({ id }) => id === +v) || TEMPLATES[0]
                this.currentTemplate = name
                localStorage.setItem('templateId', v)
            }
        }
    }
}
</script>

<style lang="sass">

</style>

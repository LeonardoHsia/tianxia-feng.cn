<template>
    <div class="resume">
        <el-form :inline="true" :model="resumeForm" class="resumeForm">
            <el-form-item label="选择模板">
                <el-select v-model="resumeForm.currentTemplateId" placeholder="请选择">
                    <el-option v-for="item in templates" :key="item.id" :value="item.id" :label="item.label"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="字体颜色">
                <el-color-picker type="color" class="color-picker" v-model="resumeForm.color" placeholder="请选择"></el-color-picker>
            </el-form-item>
            <el-form-item label="主题色">
                <el-color-picker type="color" class="color-picker" v-model="resumeForm.themeColor" placeholder="请选择"></el-color-picker>
            </el-form-item>
            <el-form-item>
                <el-button icon="el-icon-refresh" @click="reset">重置</el-button>
            </el-form-item>
            <el-form-item>
                <el-button icon="el-icon-download" @click="downloadResume">导出</el-button>
            </el-form-item>
        </el-form>
        <component :is="currentTemplate" :data="resumeInfo" :editable="editable"></component>
    </div>
</template>

<script>
import { DEFAULT_THEME } from '@consts/resume'
import { TEMPLATES } from './consts'
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters, mapMutations } = createNamespacedHelpers('Resume')

export default {
    name: 'Resume',
    components: Object.assign({}, ...TEMPLATES.map(({ name, label }) => (
        { [name]: () => import(`./resumeTemplates/${name}`) })
    )),
    data () {
        return {
            editable: true,
            templates: TEMPLATES,
            resumeInfo: {},
            currentTemplate: '',
            resumeForm: {
                color: '',
                themeColor: '',
                currentTemplateId: 0
            }
        }
    },
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
        this.resumeForm.currentTemplateId = +templateId
        this.switchTemplate()

        // 初始化展示信息的静默删除flag
        this.SET_DELETE_SILENTLY(this.$cookieUtil.getCookie('deleteSilently'))
    },
    mounted () {
        // 初始化主题
        this.initTheme()
    },
    methods: {
        ...mapActions(['setResumeInfo']),
        ...mapMutations(['SET_DELETE_SILENTLY', 'COLOR_CHANGE', 'THEME_COLOR_CHANGE', 'RESET_THEME']),
        ...mapGetters(['getColor', 'getThemeColor']),
        initTheme () {
            this.COLOR_CHANGE(this.$cookieUtil.getCookie(DEFAULT_THEME.colorProp))
            this.THEME_COLOR_CHANGE(this.$cookieUtil.getCookie(DEFAULT_THEME.themeColorProp))

            this.syncTheme()
        },
        syncTheme () {
            this.resumeForm.color = this.getColor()
            this.resumeForm.themeColor = this.getThemeColor()
        },
        switchTemplate (v = this.resumeForm.currentTemplateId) {
            const { name } = TEMPLATES.find(({ id }) => id === +v) || TEMPLATES[0]
            this.currentTemplate = name
        },
        downloadResume () {
            alert('下载简历')
        },
        reset () {
            this.$confirm('是否确定重置主题？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.RESET_THEME()
                this.syncTheme()
                this.$message({
                    type: 'success',
                    message: '主题重置成功!',
                    duration: 1000,
                    showClose: true
                })
            })
        }
    },
    computed: {
        ...mapGetters(['getResumeInfo'])
    },
    watch: {
        getResumeInfo (v) {
            this.resumeInfo = v
        },
        'resumeForm.currentTemplateId' (v) {
            if (!isNaN(+v)) {
                const { name } = TEMPLATES.find(({ id }) => id === +v) || TEMPLATES[0]
                this.currentTemplate = name
                localStorage.setItem('templateId', v)
            }
        },
        'resumeForm.color' (v) {
            this.COLOR_CHANGE(v)
        },
        'resumeForm.themeColor' (v) {
            this.THEME_COLOR_CHANGE(v)
        }
    }
}
</script>

<style lang="scss">
.resume {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .resumeForm {
        margin: .5rem auto;
        .el-form-item {
            margin-bottom: 0rem;
        }
    }
}
</style>

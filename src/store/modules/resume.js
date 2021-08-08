import { setCookie, deleteCookie } from '@common/utils/cookieUtil'
import { DEFALT_EXPIRES, DEFAULT_THEME } from '@consts/resume'

export default {
    namespaced: true,
    state: {
        editable: true,
        deleteSilently: false,
        theme: {
            color: DEFAULT_THEME.defaultColor,
            themeColor: DEFAULT_THEME.defaultThemeColor
        },
        resumeInfo: {
            basicInfo: {
                name: '夏天',
                birthDate: '1992-07-24',
                sex: '男',
                workSeniority: '工作年限',
                qualification: '学历',
                telephone: '15195880516',
                email: '380015486@qq.com',
                maritalStatus: 0,
                photo: ''
            },
            jobIntention: {
                station: '意向岗位',
                city: '意向城市',
                salary: '期望月薪',
                type: '求职类型',
                state: '当前状态'
            },
            // 支持输入文本+数组
            selfIntroduction: {
                introduceText: '',
                introducePoints: [

                ]
            },
            educations: [

            ],
            works: [

            ],
            projects: [

            ]
        }
    },
    actions: {
        setResumeInfo ({ commit }, resumeInfo) {
            commit('SET_RESUMEINFO', resumeInfo)
        },
        setEditable ({ commit }, editable) {
            commit('SET_EDITABLE', editable)
        },
        modifyResumeInfo ({ commit }, { method, namespace, key, value }) {
            method = String(method).toUpperCase()
            switch (method) {
            case 'DELETE':
                commit('Resume/DELETE_RESUME_INFO_KEY', { namespace, key })
                break
            case 'SET':
                commit('Resume/SET_RESUME_INFO_KEY', { namespace, key, value })
                break
            default:
                throw new Error(`Wrong method ${method}`)
            }
        }
    },
    mutations: {
        SET_RESUMEINFO (state, resumeInfo) {
            state.resumeInfo = resumeInfo
        },
        SET_EDITABLE (state, editable) {
            state.editable = editable
        },
        DELETE_RESUME_INFO_KEY (state, { namespace, key }) {
            state.resumeInfo[namespace][key] = undefined
        },
        SET_RESUME_INFO_KEY (state, { key, value }) {
            state['resumeInfo' + '.' + key] = value
        },
        SET_DELETE_SILENTLY (state, isSilently) {
            isSilently = !!isSilently
            state.deleteSilently = isSilently
            setCookie('deleteSilently', isSilently, DEFALT_EXPIRES)
        },
        RESET_THEME (state) {
            this.commit('Resume/COLOR_CHANGE')
            this.commit('Resume/THEME_COLOR_CHANGE')
        },
        COLOR_CHANGE (state, color) {
            color = color || DEFAULT_THEME.defaultColor
            state.theme.color = color
            this.commit('Resume/SET_THEME_PROPERTY', { prop: DEFAULT_THEME.colorProp, v: color })
        },
        THEME_COLOR_CHANGE (state, themeColor) {
            themeColor = themeColor || DEFAULT_THEME.defaultThemeColor
            state.theme.themeColor = themeColor
            this.commit('Resume/SET_THEME_PROPERTY', { prop: DEFAULT_THEME.themeColorProp, v: themeColor })
        },
        SET_THEME_PROPERTY (state, { prop, v }) {
            if (v) {
                document.querySelector('html').style.setProperty(prop, v)
                setCookie(prop, v, DEFALT_EXPIRES)
            } else {
                document.querySelector('html').style.removeProperty(prop)
                deleteCookie(prop)
            }
        }
    },
    getters: {
        getResumeInfo (state) {
            return state.resumeInfo
        },
        isEditable (state) {
            return state.editable
        },
        getTemplates (state) {
            return state.TEMPLATES
        },
        isDeleteSilently (state) {
            return state.deleteSilently
        },
        getColor (state) {
            return state.theme.color
        },
        getThemeColor (state) {
            return state.theme.themeColor
        }
    }
}

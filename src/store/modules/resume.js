import { setCookie } from '@common/utils/cookieUtil'

export default {
    namespace: false,
    state: {
        editable: true,
        deleteSilently: false,
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
                commit('DELETE_RESUME_INFO_KEY', { namespace, key })
                break
            case 'SET':
                commit('SET_RESUME_INFO_KEY', { namespace, key, value })
                break
            default:
                throw new Error(`Wrong method ${method}`)
            }
        }
    },
    mutations: {
        'SET_RESUMEINFO' (state, resumeInfo) {
            state.resumeInfo = resumeInfo
        },
        'SET_EDITABLE' (state, editable) {
            state.editable = editable
        },
        'DELETE_RESUME_INFO_KEY' (state, { namespace, key }) {
            state.resumeInfo[namespace][key] = undefined
        },
        'SET_RESUME_INFO_KEY' (state, { key, value }) {
            state['resumeInfo' + '.' + key] = value
        },
        'SET_DELETE_SILENTLY' (state, isSilently) {
            state.deleteSilently = isSilently
            setCookie('deleteSilently', isSilently, 60 * 60 * 24 * 7)
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
        }
    }
}

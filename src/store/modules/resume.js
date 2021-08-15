import { setCookie, deleteCookie } from '@utils/cookieUtil'
import { DEFALT_EXPIRES, DEFAULT_THEME } from '@consts/resume'

export default {
    namespaced: true,
    state: {
        editable: true,
        deleteSilently: false,
        theme: {
            color: DEFAULT_THEME.defaultColor,
            themeColor: DEFAULT_THEME.defaultThemeColor,
            sectionColor: DEFAULT_THEME.defaultSectionColor
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
                station: '前端开发',
                city: '南京',
                salary: '面议',
                type: '求职类型',
                state: '当前状态'
            },
            // 支持输入文本+数组
            selfIntroduction: [
                '篇幅不要太长，注意结合简历整体的美观度，内容中应总结经验和特长，突出符合求职岗位职位描述的特点，避免使用过多形容词。例：拥有良好的沟通和协调能力，善于应变，能够快速适应新环境，熟悉使用办公软件，对文件管理十分熟悉。',
                [
                    '具体细化的某项介绍1',
                    '具体细化的某项介绍2',
                    '具体细化的某项介绍3',
                    '具体细化的某项介绍4'
                ]
            ],
            educations: [
                {
                    school: '南京理工大学紫金学院',
                    start: '2010-07',
                    end: '2014-09',
                    diploma: '全日制本科',
                    major: '计算机系',
                    content: [
                        '大学之前的教育经历建议不写，尽量写与求职行业或者求职岗位相关的课程，有交流交换的经验可以在教育经历中展示。工作年限较多或成绩自认不够优异，则可以直接将教育背景清晰罗列后，重点丰富其他模块。成绩优异的话建议写上GPA及排名等信息，尽量简洁。',
                        [
                            '第一条介绍第一条介绍第一条介绍第一条介绍第一条介绍第一条介绍第一条介绍',
                            '第二条介绍',
                            '第三条介绍',
                            '第四条介绍',
                            '第五条介绍第五条介绍第五条介绍第五条介绍第五条介绍'
                        ],
                        '第二段整体的介绍'
                    ]
                }
            ],
            works: [
                {
                    company: '公司名称',
                    start: '2014-06',
                    end: '2015-10',
                    station: '职位',
                    industry: '行业',
                    salary: '月薪',
                    content: '详细描述你的职责范围、工作内容和工作成果。最新的工作经验放在最前，描述尽量简洁，尽量写与职位相匹配的内容，将有助于HR第一时间发现你的亮点。如果是不知名企业，可以在工作内容的第一句话加上简短的公司或主要产品介绍，尽可能用数字说明成绩，突出分析能力、团队协作能力、解决问题的能力等工作上所需的专业素质。'
                }, {
                    company: '公司名称2',
                    start: '2014-06',
                    end: '2015-10',
                    station: '职位',
                    industry: '行业',
                    salary: '月薪',
                    content: [
                        '详细描述你的职责范围、工作内容和工作成果。最新的工作经验放在最前，描述尽量简洁，尽量写与职位相匹配的内容，将有助于HR第一时间发现你的亮点。',
                        [
                            '第一条介绍第一条介绍第一条介绍AAAAAAA',
                            '第二条介绍',
                            '第三条介绍',
                            '第四条介绍',
                            '第五条介绍第五条介绍第五条介绍第五条介绍第五条介绍BBBBBB'
                        ],
                        '第二段整体的介绍'
                    ]
                }, {
                    company: '公司名称3',
                    start: '2014-06',
                    end: '2015-10',
                    station: '职位',
                    industry: '行业',
                    salary: '月薪',
                    content: [
                        '详细描述你的职责范围、工作内容和工作成果。最新的工作经验放在最前，描述尽量简洁，尽量写与职位相匹配的内容，将有助于HR第一时间发现你的亮点。',
                        [
                            '第一条介绍第一条介绍第一条介绍AAAAAAA',
                            '第二条介绍',
                            '第三条介绍',
                            '第四条介绍',
                            '第五条介绍第五条介绍第五条介绍第五条介绍第五条介绍BBBBBB'
                        ],
                        '第二段整体的介绍'
                    ]
                }
            ],
            projects: [
                {
                    project: '项目名称',
                    start: '2014-06',
                    end: '2015-10',
                    station: '职位',
                    href: '/home',
                    content: [
                        '详细描述你的职责范围、工作内容和工作成果。最新的工作经验放在最前，描述尽量简洁，尽量写与职位相匹配的内容，将有助于HR第一时间发现你的亮点。如果是不知名企业，可以在工作内容的第一句话加上简短的公司或主要产品介绍，尽可能用数字说明成绩，突出分析能力、团队协作能力、解决问题的能力等工作上所需的专业素质。'
                    ]
                }, {
                    project: '项目名称2',
                    start: '2014-06',
                    end: '2015-10',
                    station: '职位',
                    content: [
                        '详细描述你的职责范围、工作内容和工作成果。最新的工作经验放在最前，描述尽量简洁，尽量写与职位相匹配的内容，将有助于HR第一时间发现你的亮点。如果是不知名企业，可以在工作内容的第一句话加上简短的公司或主要产品介绍，尽可能用数字说明成绩，突出分析能力、团队协作能力、解决问题的能力等工作上所需的专业素质。',
                        [
                            '第一条介绍第一条介绍第一条介绍AAAAAAA',
                            '第二条介绍',
                            '第三条介绍',
                            '第四条介绍',
                            '第五条介绍第五条介绍第五条介绍第五条介绍第五条介绍BBBBBB'
                        ]
                    ]
                }
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
            this.commit('Resume/SECTION_COLOR_CHANGE')
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
        SECTION_COLOR_CHANGE (state, sectionColor) {
            sectionColor = sectionColor || DEFAULT_THEME.defaultSectionColor
            state.theme.sectionColor = sectionColor
            this.commit('Resume/SET_THEME_PROPERTY', { prop: DEFAULT_THEME.sectionColorProp, v: sectionColor })
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
        },
        getSectionColor (state) {
            return state.theme.sectionColor
        }
    }
}

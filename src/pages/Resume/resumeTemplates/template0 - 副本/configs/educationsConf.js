export default {
    title: '教育经历',
    root: 'educations',
    fields: [
        {
            label: '学校名称',
            field: 'school',
            type: 'text',
            validator: () => {},
            // onStage: true,
            change: () => {}
        },
        {
            label: '开始时间',
            field: 'start',
            type: 'date',
            validator: () => {},
            // onStage: true,
            change: () => {}
        },
        {
            label: '结束时间',
            field: 'end',
            type: 'date',
            validator: () => {},
            // onStage: true,
            change: () => {}
        },
        {
            label: '专业',
            field: 'major',
            type: 'text',
            validator: () => {},
            // onStage: true,
            change: () => {}
        },
        {
            label: '学历',
            field: 'diploma',
            type: 'text',
            validator: () => {},
            // onStage: true,
            change: () => {}
        },
        {
            label: '文案',
            field: 'content',
            type: 'html',
            validator: () => {},
            // onStage: true,
            change: () => {}
        }
    ]
}

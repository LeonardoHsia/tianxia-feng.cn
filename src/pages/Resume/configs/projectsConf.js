export default {
    title: '项目经历',
    root: 'projects',
    fields: [
        {
            label: '项目名称',
            field: 'project',
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
            label: '职位',
            field: 'station',
            type: 'text',
            validator: () => {},
            // onStage: true,
            change: () => {}
        },
        {
            label: '跳转',
            field: 'href',
            type: 'url',
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

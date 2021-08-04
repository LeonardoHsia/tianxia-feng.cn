export default {
    title: '基本信息',
    root: 'basicInfo',
    fields: [
        {
            label: '性别',
            field: 'sex',
            type: 'text',
            validator: () => {},
            onStage: true,
            change: () => {}
        }, {
            label: '出生日期',
            field: 'birthDate',
            type: 'date',
            validator: () => {},
            change: () => {},
            onStage: {
                label: '年龄',
                value (v) {
                    return new Date().getFullYear() - new Date(v).getFullYear()
                }
            }
        }, {
            label: '联系电话',
            field: 'telephone',
            type: 'text',
            validator: () => {},
            change: () => {},
            onStage: true
        }, {
            label: '邮箱',
            field: 'email',
            type: 'email',
            validator: () => {},
            change: () => {},
            onStage: {
                value (v) {
                    return `<a href="mainto:${v}">${v}</a>`
                },
                isHtml: true
            }
        }, {
            label: '民族',
            field: 'nation',
            type: 'text',
            validator: () => {},
            change: () => {},
            isOptional: true
        }, {
            label: '开始工作时间',
            field: 'jobFrom',
            type: 'select',
            change: () => {},
            isOptional: true
        }
    ]
}

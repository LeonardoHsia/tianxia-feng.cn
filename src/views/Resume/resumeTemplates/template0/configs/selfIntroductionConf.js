// 自我介绍
export default {
    title: '自我介绍',
    root: 'selfIntroduction',
    fields: [
        {
            // label: '',
            field: 'introduceText',
            type: 'textarea',
            validator: () => {},
            onStage: true,
            change: () => {}
        },
        {
            // label: '',
            field: 'introducePoints',
            type: 'list',
            validator: () => {},
            onStage: true,
            change: () => {}
        }
    ]
}

export default {
    props: {
        conf: {
            type: Object,
            default: () => ({
                title: '',
                root: '',
                fields: []
            })
        },
        data: {
            type: Object,
            default: () => {}
        }
    }
}

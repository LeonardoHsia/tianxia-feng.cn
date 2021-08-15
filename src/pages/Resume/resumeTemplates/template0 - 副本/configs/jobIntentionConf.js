// 求职意向
export default {
    title: '求职意向',
    fields: [{
        label: '意向岗位',
        field: 'station',
        type: 'jobSelect',
        validator: () => {},
        onStage: true,
        change: () => {}
    }, {
        label: '意向城市',
        field: 'city',
        type: 'citySelect',
        validator: () => {},
        onStage: true,
        change: () => {}
    }, {
        label: '期望月薪',
        field: 'salary',
        type: 'numberRange',
        validator: () => {},
        onStage: true,
        change: () => {}
    }]
}

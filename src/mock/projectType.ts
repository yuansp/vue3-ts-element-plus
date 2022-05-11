const Mock = require('mockjs');
const projectType = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'data|15': [{
        id: '@string("0123456789",6,6)', //随机id
        'type|1': ['合同类型一', '合同类型二', '合同类型三', '合同类型四', '合同类型五', '合同类型六', '合同类型七', '合同类型八', '合同类型九', '合同类型十'],
    }]
})
export default {
    'get|/api/getTypeProject': () => {
        return {
            status: 200,
            message: 'success',
            data: projectType
        };
    }
}
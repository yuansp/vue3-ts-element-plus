
const Mock = require('mockjs');
const projectList = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'data|5': [{
        id: '@id', //随机id
        xuhao: '@cname', //随机名称
        name: '@last', //随机昵称
        type: '@name', //创建时间
        department: '@name', //随机部门
    }]
})

export default {
    'get|/api/getProject': () => {
        return {
            status: 200,
            message: 'success',
            data: projectList
        };
    }
}

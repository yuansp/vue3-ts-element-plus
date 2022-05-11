
const Mock = require('mockjs');
const projectList = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'data|10': [{
        id: '@string("0123456789",6,6)', //随机id
        xuhao: '@increment(1)',
        'name|1': ['项目一', '项目二', '项目三', '项目四', '项目五', '项目六', '项目七', '项目八', '项目九', '项目十'],
        'type|1': ['类型一', '类型二', '类型三', '类型四', '类型五'],
        'department|1': ['部门一', '部门二', '部门三', '部门四', '部门五'],
    }]
})
const getProject = {
    'get|/api/getProject': () => {
        return {
            status: 200,
            message: 'success',
            data: projectList
        };
    }
}
export default getProject
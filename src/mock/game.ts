
const Mock = require('mockjs');
const gameList = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'data|5': [{
        id: '@id', //随机id
        name: '@cname', //随机名称
        nickName: '@last', //随机昵称
        'time|0-200': 0, //时长
        createTime: '@datetime', //创建时间
    }]
})

export default {
    'get|/api/getGames': () => {
        return {
            status: 200,
            message: 'success',
            data: gameList
        };
    }
}

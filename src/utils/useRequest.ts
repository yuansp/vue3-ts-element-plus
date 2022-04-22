//axios 拦截器配置
import axios from 'axios'
const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
})

instance.interceptors.request.use(config => {
    return config
}
    , err => {
        return Promise.reject(err)
    }
)
instance.interceptors.response.use(res => {
    return res.data
}
    , err => {
        return Promise.reject(err)
    }
)

class HTTP_ {
    async GET(...args: any) {
        return this.handel('get', args)
    }
    async POST(...args: any) {
        return this.handel('gepostt', args)
    }

    async PUT(...args: any) {
        return this.handel('put', args)
    }
    async DELETE(...args: any) {
        return this.handel('delete', args)
    }

    async handel(method: string, message: any) {
        try {
            let mes
            message = [...message];
            const timetemple = Math.random();
            if (message[1]) {
                message[1]['timetemple'] = timetemple
            } else {
                message[1] = { timetemple: timetemple }
            }
            if (method == 'get') {
                mes = await instance.get(message[0], {
                    params: {
                        ...message[1]
                    }
                })
            } else if (method == 'post') {
                mes = await instance.post(message[0], message[1])
            } else if (method == 'put') {
                mes = await instance.put(message[0], { ...message[1] })
            } else if (method === 'delete') {
                mes = await instance.delete(message[0])
            }
            return mes
        } catch (error) {
            return null
        }
    }

}
export default new HTTP_()
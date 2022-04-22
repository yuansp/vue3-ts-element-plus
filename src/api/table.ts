import HTTP_ from '@/utils/useRequest'

export function gettable(): Promise<any> {
    return HTTP_.GET('/getUsers')
}
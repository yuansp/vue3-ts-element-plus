import HTTP_ from '@/utils/useRequest'

export function getgames(): Promise<any> {
    return HTTP_.GET('/getGames')
}

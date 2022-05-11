import HTTP_ from '@/utils/useRequest'
import {getDataParam} from '@/stype/project'
export function getProject(params:getDataParam): Promise<any> {
    console.log(params)
    return HTTP_.GET('/getProject')
}
export function getProjectType(): Promise<any> {
    return HTTP_.GET('/getTypeProject')
}

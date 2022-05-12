export interface getDataParam {
    current: number,
    size: number,
    searchName?: string,
    searchType?: string,
}
export interface filtType {
    searchName: string;
    searchType: string;
}
export interface dataType {
    id: number,
    name: string,
    xuhao: number,
    type: string,
    department: string,
}
export interface projectType {
    id: number,
    type: string,
}
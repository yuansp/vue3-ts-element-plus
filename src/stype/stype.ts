export interface tRouters {
    path: string;
    name: any;
    meta: any;
    children?: any;
}

export interface states {
    shows: boolean,
    sidebarlist: Array<any>,
}

export interface sidebartypes {
    state: states,
    mutations: any,
    actions: any
}

export interface tableData {
    id: string;
    name: string;
    nickName: string;
    age: number;
    phone: string;
    email: string;
    address: string;
    createTime: string;
}
export interface datalist {
    id: number;
    name: string;
    checked: boolean
}
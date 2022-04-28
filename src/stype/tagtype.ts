export interface meta {
    title: string,
    icon?: string
}
export interface views {
    path: string,
    mate: meta
}
export interface tagViews {
    tages: views[],
}
export interface tagViewsState {
    state: tagViews,
    mutations: any,
    actions: any
}
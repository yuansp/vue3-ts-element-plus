import { states } from '@/stype/stype'
import { sidebartypes } from '@/stype/stype'
const sidebar: sidebartypes = {
    state: {
        shows: false,
        sidebarlist: []
    },
    mutations: {
        CHANGE_SHOW(state: states, payload: boolean) {
            state.shows = payload;
        },
        SET_SIDEBARLIST(state: states, payload: Array<any>) {
            state.sidebarlist = payload
        }
    },
    actions: {
        changeShow(context: any, payload: boolean) {
            context.commit('CHANGE_SHOW', payload)
        },
        setSidebarList(context: any, payload: Array<any>) {
            context.commit('SET_SIDEBARLIST', payload)
        }
    }
}
export default sidebar
import { views } from '@/stype/tagtype'
import { tagViews } from '@/stype/tagtype'
import { tagViewsState } from '@/stype/tagtype'
const sidebar: tagViewsState = {
    state: {
        tages: []
    },
    mutations: {
        ADD_TAGEVIEWS(state: tagViews, data: views) {
            const index = state.tages.findIndex(vl => vl.path === data.path)
            if (index === -1) {
                state.tages.push(data)
            }
        },
        REMOVE_TAGVIEWS(state: tagViews, data: views) {
            const index = state.tages.findIndex(vl => vl.path === data.path)
            if (index > -1) {
                state.tages.splice(index, 1)
            }
        }
    },
    actions: {
        addView(context: any, payload: views) {
            context.commit('ADD_TAGEVIEWS', payload)
        },
        removeView(context: any, payload: views) {
            context.commit('REMOVE_TAGVIEWS', payload)
        }
    }
}
export default sidebar
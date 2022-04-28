import { reactive } from 'vue';
import { RouteRecordRaw } from "vue-router";
import store from '@/store/index';

const getsidebar = (key: string, allRouters: any[]) => {
    const sidebarlist = reactive<{ data: RouteRecordRaw[] }>({
        data: [],
    });
    allRouters.forEach((item) => {
        if (item.path === key) {
            if (item.children.length > 0) {
                sidebarlist.data = item.children;
            }
        }
    });
    store.dispatch("setSidebarList", sidebarlist.data);
};
export default getsidebar;
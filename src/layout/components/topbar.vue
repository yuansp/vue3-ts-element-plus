<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo topbars"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#fff"
    @select="handleSelect"
  >
    <!-- <el-menu-item index="1">Processing Center</el-menu-item>
    <el-menu-item index="2">
      sssd
    </el-menu-item>
    <el-menu-item index="3">Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item> -->
    <el-menu-item v-for="item in arr" :key="item.path" :index="item.path">
      {{ item.meta.title }}
    </el-menu-item>
  </el-menu>
</template>
<script lang='ts'>
import { defineComponent, ref, watch } from "vue";
import { ElMenu, ElMenuItem } from "element-plus";
import { useRouter } from "vue-router";
import { tRouters } from "@/stype/stype";
import getsidebar from "./hook/sidebar";
export default defineComponent({
  components: {
    ElMenu,
    ElMenuItem,
  },
  setup() {
    const $router = useRouter();
    const allRouters = $router.getRoutes();
    let arr: tRouters[] = [];
    allRouters.forEach((item) => {
      let L = item.path.split("/");
      if (L.length === 2 && L[1] !== "") {
        let obj: tRouters = item;
        arr.push(obj);
      }
    });
    const activeIndex2 = ref("");
    watch(
      () => $router.currentRoute.value.path,
      (val) => {
        let path = "/" + val.split("/")[1];
        activeIndex2.value = path;
      }
    );
    const handleSelect = (key: string) => {
      activeIndex2.value = key;
      $router.push(key);
      getsidebar(key, allRouters);
    };
    // const getsidebar = (key: string) => {
    //   let sidebarlist=reactive<{data:RouteRecordRaw[]}>({
    //     data: [],
    //   });
    //   allRouters.forEach((item) => {
    //     if (item.path === key) {
    //       if(item.children.length>0){
    //         sidebarlist.data=item.children;
    //       }
    //     }
    //   });
    //   store.dispatch("setSidebarList", sidebarlist.data);
    // };
    return {
      arr,
      activeIndex2,
      handleSelect,
    };
  },
});
</script>
<template>
  <div class="sidebars">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#000"
      :default-active="activeindex"
      text-color="#fff"
      :collapse="collapse"
      :collapse-transition="false"
      @select="handleSelect"
    >
      <template v-for="item in datas">
        <el-menu-item
          v-if="item.children.length == 0"
          :key="topPath + '/' + item.path"
          :index="topPath + '/' + item.path"
        >
          <svg-icon :icon-class="item.meta.icon"></svg-icon>
          <span class="meutitle">{{ item.meta.title }}</span>
        </el-menu-item>

        <el-sub-menu
          v-if="item.children.length > 0"
          :key="item.path"
          :index="item.path"
        >
          <template #title>
            <svg-icon :icon-class="item.meta.icon"></svg-icon>
            <span class="meutitle">{{ item.meta.title }}</span>
            </template>
          <el-menu-item-group
            v-for="item1 in item.children"
            :key="topPath + '/' + item1.path"
          >
            <el-menu-item
              :index="topPath + '/' + item.path + '/' + item1.path"
              >
              <svg-icon :icon-class="item.meta.icon"></svg-icon>
              <span class="meutitle">{{ item1.meta.title }}</span>
              </el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>
<script lang='ts'>
import { ElMenu, ElMenuItem, ElSubMenu } from "element-plus";
import { defineComponent, watch, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { tRouters } from "@/stype/stype";
import store from "@/store";
export default defineComponent({
  components: {
    ElMenu,
    ElMenuItem,
    ElSubMenu,
  },
  setup() {
    const ctransition = ref(true);
    const $router = useRouter();
    let activeindex = ref("");
    let datas: tRouters[] = reactive([]);
    let collapse = ref(true);
    store.dispatch("changeShow", true);
    let topPath = ref("");
    watch(
      () => $router.currentRoute.value.path,
      (val) => {
        datas.length = 0;
        topPath.value = "/" + val.split("/")[1];
        store.getters.sidebarlist.forEach((item: any) => {
          let obj = reactive({
            path: "",
            name: "",
            meta: {},
            children: [],
          });
          obj.path = item.path;
          obj.name = item.name;
          obj.meta = item.meta;
          if (item.children) {
            obj.children = item.children;
          }
          datas.push(obj);
        });
        if (datas.length > 0) {
          collapse.value = false;
          store.dispatch("changeShow", false);
        } else {
          collapse.value = true;
          store.dispatch("changeShow", true);
        }
        activeindex.value = val;
      }
    );
    const handleSelect = (key: string) => {
      activeindex.value = key;
      $router.push(key);
    };
    return {
      datas, //菜单数据
      activeindex, //当前路由
      collapse, //是否收起
      ctransition, //是否收起
      topPath, //顶部路由
      handleSelect, //点击菜单
    };
  },
});
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.meutitle{
  margin-left: 5px;
}
</style>
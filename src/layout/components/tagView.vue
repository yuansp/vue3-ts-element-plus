<template>
  <div class="tagegroup">
    <svg-icon icon-class="expand" class="expand"></svg-icon>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__lightSpeedInRight"
      leave-active-class="animate__backOutDown"
    >
      <el-check-tag
        type="plain"
        style="margin-right: 8px"
        class="mx-1 tages"
        v-for="(item, index) in tages"
        :key="item.path"
        :checked="item.path === route.fullPath"
        @click="topath(item.path)"
      >
        <svg-icon icon-class="dot" class="checktd"></svg-icon>
        <el-tooltip
          :content="item.meta.title"
          placement="bottom"
          effect="customized"
        >
          {{ item.meta.title }}
        </el-tooltip>
        <svg-icon
          icon-class="close"
          class="closed"
          @click.stop="closemeu(index)"
        ></svg-icon>
      </el-check-tag>
    </transition-group>
  </div>
</template>
<script lang='ts'>
import { defineComponent, computed, ref } from "vue";
import { ElCheckTag, ElTooltip } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import store from "@/store/index";
import getsidebar from "./hook/sidebar";
import "animate.css";
export default defineComponent({
  components: {
    ElCheckTag,
    ElTooltip,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const tages: any = computed<any>(() => {
      return store.getters.tages;
    });
    const topath = (path: string) => {
      router.push(path);
      const allRouters = router.getRoutes();
      const key = "/" + path.split("/")[1];
      getsidebar(key, allRouters);
    };
    const closemeu = (index: number) => {
      if (tages.value[index].path === route.fullPath) {
        //删除当前选中路由
        let path = ref("");
        if (index === 0) {
          //删除第一个
          if (tages.value.length > 1) {
            //有多个标签页
            path.value = tages.value[1].path;
            router.push(tages.value[1].path);
            store.dispatch("removeView", tages.value[index]);
          } else {
            //只有一个标签页
            store.dispatch("removeView", tages.value[index]);
            router.push("/");
          }
        } else {
          path.value = tages.value[index - 1].path;
          router.push(tages.value[index - 1].path);
          store.dispatch("removeView", tages.value[index]);
        }
        const allRouters = router.getRoutes();
        const key = "/" + path.value.split("/")[1];
        getsidebar(key, allRouters);
      } else {
        store.dispatch("removeView", tages.value[index]);
      }
    };
    return {
      tages,
      route,
      router,
      topath,
      closemeu,
    };
  },
});
</script>
<style lang="scss" scoped>
.tagegroup {
  position: relative;
  padding-left: 30px;
  height: 40px;
  margin-bottom: 20px;
  line-height: 40px;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
    0px 0px 3px 0 rgba(0, 0, 0, 0.04);
}
.tages {
  position: relative;
  padding-left: 20px;
  padding-right: 25px;
}
.expand {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: 25px !important;
  height: 25px !important;
  margin-right: 10px;
  cursor: pointer;
}
.closed {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translate(0, -50%);
  height: 10px !important;
  width: 10px !important;
  border-radius: 10px;
}
.closed:hover {
  background-color: #fff;
}
</style>
<template>
  <el-container>
    <el-header>
      <topbar-vue />
    </el-header>
    <el-container>
      <el-aside :class="{'sidebarhide':!sidebarshow,'sidebarshow':sidebarshow}">
        <sidebar-vue v-show="sidebarshow" />
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { watch, defineComponent,ref } from "vue";
import sidebarVue from "./layout/components/sidebar.vue";
import topbarVue from "./layout/components/topbar.vue";
import store from "@/store";
export default defineComponent({
  components: {
    sidebarVue,
    topbarVue,
  },
  setup() {
    let sidebarshow = ref(false);
    watch(
      () => store.getters.shows,
      (val) => {
        sidebarshow.value = !val;
      }
    );
    return {
      sidebarshow,
    };
  },
});
</script>
<style lang="scss" scoped>
.sidebarhide {
    width: 0px;
}

.sidebarshow {
    width: 200px;
    height: calc(100vh - 58px);
    background: #000;
}
</style>
<template>
  <el-container>
    <el-header>
      <topbar-vue />
    </el-header>
    <el-container>
      <el-aside :class="{ sidebarhide: !sidebarshow, sidebarshow: sidebarshow }">
        <sidebar-vue v-show="sidebarshow" />
      </el-aside>
      <el-main class="elmains">
        <div class="showtages">
          <tag-view />
        </div>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { watch, defineComponent, ref } from "vue";
import sidebarVue from "./layout/components/sidebar.vue";
import topbarVue from "./layout/components/topbar.vue";
import TagView from "./layout/components/tagView.vue";
import store from "@/store";
export default defineComponent({
  components: {
    sidebarVue,
    topbarVue,
    TagView,
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

.elmains {
  position: relative;
  margin-top: 40px;
  height: calc(100vh - 110px) !important;
}

.showtages {
  position: fixed;
  top: 58px;
  width: 100%;
  z-index: 20005;
}

.sidebarshow {
  width: 200px;
  height: calc(100vh - 58px);
  background: #000;
}
</style>

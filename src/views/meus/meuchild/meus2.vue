<template>
  <el-button @click="showDialog">选择项目按钮</el-button>
  <el-dialog v-model="dialogVisible" title="选择项目" width="50%"> 
      <Project />
  </el-dialog>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import { ElDialog, ElButton, ElTable } from "element-plus";
import Project from "@/components/project/index.vue";

export default defineComponent({
  components: {
    Project,
    ElDialog,
    ElButton,
  },
  setup() {
    const dialogVisible = ref(false);
    const showDialog = () => {
      dialogVisible.value = true;
    };
    return {
      dialogVisible,
      showDialog,
    };
  },
});
</script>
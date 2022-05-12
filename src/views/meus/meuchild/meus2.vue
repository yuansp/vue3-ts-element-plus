<template>
  <div class="mains">
    <div class="rows">
      <span>合同类型：</span> <ProjectType />
    </div>
    <el-button @click="showDialog">选择项目按钮</el-button>
    <el-dialog v-model="dialogVisible" title="选择项目" width="50%">
      <Project :selectProject="selectProject" :closed="closed" />
    </el-dialog>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import { ElDialog, ElButton, ElTable } from "element-plus";
import Project from "@/components/project/project.vue";
import ProjectType from "@/components/project/projectType.vue";
export default defineComponent({
  components: {
    Project,
    ProjectType,
    ElDialog,
    ElButton,
  },
  setup() {
    const dialogVisible = ref(false);
    const showDialog = () => {
      dialogVisible.value = true;
    };
    const closed = () => {
      dialogVisible.value = false;
    };
    const selectProject = (data: any) => {
      console.log(data);
    };
    return {
      dialogVisible,
      showDialog,
      closed,
      selectProject,
    };
  },
});
</script>
<style lang="scss" scoped>
.mains{
  width: 90%;
  background:rgb(234, 233, 233)
}
.rows{
  padding-top:10px ;
  text-align: center;
  ::v-deep(.el-input__inner){
    border-radius: 5px;
  }
}
</style>
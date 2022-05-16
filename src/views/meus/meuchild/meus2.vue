<template>
  <div class="mains">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template #title>
          <span class="headers">基本信息</span>
        </template>
        <div class="rows">
          <span class="titles">合同类型：</span> <ProjectType />
        </div>
        <div class="rows">
          <span class="titles">项目名称：</span>
          <el-input type="text" disabled class="W40"></el-input>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2" class="aaa">
        <template #title>
          <span class="headers">合同文件</span>
        </template>
      </el-collapse-item>
    </el-collapse>
    <!-- <div class="rows">
      <span class="titles">项目名称</span>
      <el-input type="text" disabled></el-input>
    </div>
    <el-button @click="showDialog">选择项目按钮</el-button> -->
    <el-dialog v-model="dialogVisible" title="选择项目" width="50%">
      <Project :selectProject="selectProject" :closed="closed" />
    </el-dialog>
  </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import { ElDialog, ElButton, ElTable, ElInput } from "element-plus";
import Project from "@/components/project/project.vue";
import ProjectType from "@/components/project/projectType.vue";
export default defineComponent({
  components: {
    Project,
    ProjectType,
    ElDialog,
    ElButton,
    ElInput,
  },
  setup() {
    const dialogVisible = ref(false);
    const activeNames = ref(["1", "2", "3"]);
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
      activeNames,
    };
  },
});
</script>
<style lang="scss" scoped>
.mains {
  margin: 0 auto;
  width: 90%;
  background: rgb(234, 233, 233);
  .headers {
    padding-left: 20px;
    font-size: 25px;
    font-weight: bold;
    color: #41578a;
  }
  .rows {
    padding-top: 10px;
    padding-left: 20px;
    text-align: left;
    ::v-deep(.el-input__inner) {
      border-radius: 5px;
    }
    .titles {
      padding-right: 10px;
      font-weight: bold;
    }
  }

  .el-collapse {
    ::v-deep(.el-collapse-item__header) {
      background: #eceef3;
    }
  }
}
.W40{
  width: 40%;
}
</style>
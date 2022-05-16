<template>
  <div class="mains">
    <el-form :model="formData">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template #title>
            <span class="headers">基本信息</span>
          </template>
          <div class="rows">
            <span class="titles">合同类型：</span>
            <span>
              <ProjectType :selectType="selectType"/>
            </span>
          </div>
          <div class="rows">
            <span class="titles">项目名称：</span>
            <el-input type="text" disabled class="W40 showProjects" placeholder="请选择"></el-input>
            <el-button type="primary" @click="showProject">选择项目</el-button>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2" class="aaa">
          <template #title>
            <span class="headers">合同文件</span>
          </template>
        </el-collapse-item>
      </el-collapse>
    </el-form>
    <el-dialog v-model="dialogVisible" title="选择项目" width="50%">
      <Project :selectProject="selectProject" :closed="closed" />
    </el-dialog>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
import { ElDialog, ElButton, ElTable, ElInput, ElForm } from "element-plus";
import Project from "@/components/project/project.vue";
import ProjectType from "@/components/project/projectType.vue";
import { projectType } from "@/stype/project";
export default defineComponent({
  components: {
    Project,
    ProjectType,
    ElDialog,
    ElButton,
    ElInput,
    ElForm,
  },
  setup() {
    const dialogVisible = ref(false);
    const activeNames = ref(["1", "2", "3"]);
    const formData = reactive({
      projectType: "",
      projectTypeId: 0,
      projectName: "",
      projectId: "",
    });
    const showProject = () => {
      dialogVisible.value = true;
    };
    const closed = () => {
      dialogVisible.value = false;
    };
    const selectProject = (data: any) => {
      console.log(data);
    };
    const selectType = (data: projectType) => {
      formData.projectType = data.type;
      formData.projectTypeId = data.id;
    };
    return {
      activeNames,
      dialogVisible,
      formData,
      closed,
      selectProject,
      showProject,
      selectType,
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

    .showProjects {
      margin-right: 10px !important;
    }
  }

  .el-collapse {
    ::v-deep(.el-collapse-item__header) {
      background: #eceef3;
    }
  }
}

.W40 {
  width: 40%;
}
</style>

<template>
  <div class="mains">
    <el-form :model="formData">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1" class="aaa">
          <template #title>
            <span class="headers">基本信息</span>
          </template>
          <div class="rows">
            <span class="titles">合同类型：</span>
            <span>
              <ProjectType :selectType="selectType" />
            </span>
          </div>
          <div class="rows">
            <span class="titles">项目名称：</span>
            <el-input v-model="formData.projectName" type="text" disabled class="W40 showProjects" placeholder="请选择">
            </el-input>
            <el-button type="primary" @click="showProject">选择项目</el-button>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2" class="aaa">
          <template #title>
            <span class="headers">合同文件</span>
          </template>
        </el-collapse-item>
        <el-collapse-item name="3" class="aaa">
          <template #title>
            <span class="headers">222222</span>
          </template>
          <div>333333333</div>
          <div>333333333</div>
          <div>22222222</div>
          <div>333333333</div>
          <div>333333333</div>
          <div>333333333</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
        </el-collapse-item>
        <el-collapse-item name="4" class="aaa">
          <template #title>
            <span class="headers">3333333</span>
          </template>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
        </el-collapse-item>
        <el-collapse-item name="5" class="aaa">
          <template #title>
            <span class="headers">4444444</span>
          </template>
          <div>12312312</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
        </el-collapse-item>
        <el-collapse-item name="6" class="aaa">
          <template #title>
            <span class="headers">5555555</span>
          </template>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
        </el-collapse-item>
        <el-collapse-item name="7" class="aaa">
          <template #title>
            <span class="headers">666666</span>
          </template>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
          <div>222222222</div>
        </el-collapse-item>
      </el-collapse>
    </el-form>


    <!-- 选择项目弹框 -->
    <el-dialog v-model="dialogVisible" title="选择项目" width="50%">
      <Project :selectProject="selectProject" :closed="closed" />
    </el-dialog>

    <!-- 快捷导航 -->
    <div style="height: 300px" class="steps">
      <el-steps direction="vertical" space="10%" :active="1">
        <el-step title="Step 1" @click="steps('1')" />
        <el-step title="Step 2" @click="steps('2')" />
        <el-step title="Step 3" @click="steps('3')" />
      </el-steps>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
import { ElDialog, ElButton, ElInput, ElForm } from "element-plus";
import Project from "@/components/project/project.vue";
import ProjectType from "@/components/project/projectType.vue";
import { projectType, dataType } from "@/stype/project";
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
    const activeNames = ref(["1", "2", "3", '4', '5', '6', '7']);
    const formData = reactive({
      projectType: "",
      projectTypeId: 0,
      projectName: "",
      projectId: 0,
    });
    const showProject = () => {
      dialogVisible.value = true;
    };
    const closed = () => {
      dialogVisible.value = false;
    };
    const selectProject = (data: dataType) => {
      //名称
      formData.projectName = data.name;
      formData.projectId = data.id;
    };
    const selectType = (data: projectType) => {
      //类型
      formData.projectType = data.type;
      formData.projectTypeId = data.id;
    };
    const steps = (val: string) => {
      const num = parseInt(val)
      const elements = document.querySelectorAll('.aaa')
      elements[num].scrollIntoView()
    }
    return {
      activeNames,
      dialogVisible,
      formData,
      closed,
      selectProject,
      showProject,
      selectType,
      steps
    };
  },
});
</script>
<style lang="scss" scoped>
.mains {
  position: relative;
  margin: 0 auto;
  width: 70%;
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

  .steps {
    position: absolute;
    top: 0;
    right: -210px;
    width: 200px;
    background: #ff0;
  }
}

.W40 {
  width: 40%;
}
</style>

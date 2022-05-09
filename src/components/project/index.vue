<template>
  <div class="searchs">
    <div class="inputs">
      项目名称：
      <el-input type="text" v-model="searchName" />
    </div>
    <div class="inputs">
      项目类型：
      <el-input type="text" v-model="searchType" />
    </div>
    <el-button type="primary">
      <svg-icon icon-class="search"></svg-icon>
      查询
    </el-button>
    <el-button>
      <svg-icon icon-class="refresh"></svg-icon>
      重置
    </el-button>
  </div>
  <div class="tablearea">
    <el-table :data="data">
      <el-table-column align="center" width="55" label="选择">   
        <template #default="{ row }">
          <el-radio :label="row.id" v-model="selectRowIndex"></el-radio>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="xuhao" label="编号"></el-table-column>
      <el-table-column align="center" prop="id" label="项目id"></el-table-column>
      <el-table-column align="center" prop="name" label="项目名称"></el-table-column>
      <el-table-column align="center" prop="type" label="项目类型"></el-table-column>
      <el-table-column align="center" prop="department" label="所属部门"></el-table-column>
    </el-table>
    <page />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive, toRefs } from "vue";
import { ElInput, ElButton, ElRadio } from "element-plus";
import page from '@/components/pages/index.vue';
export default defineComponent({
  components: {
    ElInput,
    ElButton,
    ElRadio,
    page,
  },
  setup() {
    const searchName = ref("");
    const searchType = ref("");
    const selectRowIndex = ref(2);
    const data = reactive({
      data: [
        { xuhao: 1, id: 100, name: "项目1", type: "类型1", department: "部门1" },
        { xuhao: 2, id: 200, name: "项目2", type: "类型2", department: "部门2" },
        { xuhao: 3, id: 300, name: "项目3", type: "类型3", department: "部门3" },
        { xuhao: 4, id: 400, name: "项目4", type: "类型4", department: "部门4" },
      ],
    });
    return {
      searchName,
      searchType,
      selectRowIndex,
      ...toRefs(data),
    };
  },
});
</script>
<style lang="scss" scoped>
.searchs {
  overflow: hidden;
  .inputs {
    width: 300px;
    float: left;
    margin-left: 10px;
    .el-input {
      width: 200px;
      ::v-deep(.el-input__inner) {
        height: 25px;
      }
    }
  }
}
.tablearea{
    ::v-deep(.el-radio__label){
        display: none;
    }
}
</style>
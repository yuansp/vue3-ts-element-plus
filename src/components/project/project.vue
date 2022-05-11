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
    <el-button type="primary" @click="search">
      <svg-icon icon-class="search"></svg-icon>
      查询
    </el-button>
    <el-button @click="resetFilts">
      <svg-icon icon-class="refresh"></svg-icon>
      重置
    </el-button>
  </div>
  <div class="tablearea">
    <el-table :data="data" height="500" v-loading="loading">
      <el-table-column align="center" width="55" label="选择">
        <template #default="{ row }">
          <el-radio :label="row.id" v-model="selectRowIndex"></el-radio>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="xuhao"
        label="编号"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="id"
        label="项目id"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="项目名称"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="type"
        label="项目类型"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="department"
        label="所属部门"
      ></el-table-column>
    </el-table>
    <page :total="total" :nexPage="nexPage" :current="current" />
    <div class="footers">
      <el-button size="large" @click="close">取消</el-button>
      <el-button size="large" type="primary" @click="checked">确定</el-button>
    </div>
  </div>
</template>

<script lang='ts'>
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  onMounted,
  nextTick,
} from "vue";
import { ElInput, ElButton, ElRadio } from "element-plus";
import { getProject } from "@/api/project";
import { getDataParam, filtType,dataType } from "@/stype/project";
import page from "@/components/pages/index.vue";

export default defineComponent({
  components: {
    ElInput,
    ElButton,
    ElRadio,
    page,
  },
  props:{
    selectProject:{
      type:Function,
      required:true
    },
    closed:{
      type:Function,
      required:true
    }
  },
  setup(props) {
    const filts = reactive<filtType>({
      searchName: "",
      searchType: "",
    });
    const selectRowIndex = ref();
    const loading = ref(true);
    const total = 35;
    const layout = "total, prev, pager, next";
    const current = ref(1);
    const data = reactive<{data:dataType[]}>({
      data: [],
    });
    const getData = async (param: getDataParam) => {
      const params = param;
      const res = await getProject(params);
      data.data = res.data.data;
      loading.value = false;
    };
    const nexPage = (pages: any) => {
      const params = pages;
      loading.value = true;
      Object.keys(filts).forEach((item: string) => {
        if (filts[item as keyof filtType] !== "") {
          params[item] = filts[item as keyof filtType];
        }
      });
      getData(params);
    };
    const search = () => {
      const params: getDataParam = {
        current: 1,
        size: 10,
      };
      loading.value = true;
      Object.keys(filts).forEach((item: string) => {
        if (filts[item as keyof filtType] !== "") {
          params[item as keyof filtType] = filts[item as keyof filtType];
        }
      });
      getData(params);
    };
    const resetFilts = () => {
      current.value = 0;
      Object.keys(filts).forEach((item: string) => {
        filts[item as keyof filtType] = "";
      });
      nextTick(() => {
        current.value = 1;
      });
    };
    onMounted(() => {
      const params = { current: 1, size: 10 };
      getData(params);
    });
    const checked=()=>{
      if(selectRowIndex.value){
        data.data.forEach(item=>{
          if(item.id === selectRowIndex.value){
            props.selectProject(item);
            props.closed();
          }
        })
      }
    }
    const close=()=>{
      Object.keys(filts).forEach((item: string) => {
        filts[item as keyof filtType] = "";
      });
      props.closed();
    }
    return {
      selectRowIndex,
      current,
      total,
      layout,
      loading,
      ...toRefs(filts),
      ...toRefs(data),
      nexPage,
      resetFilts,
      search,
      close,
      checked
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
.tablearea {
  ::v-deep(.el-radio__label) {
    display: none;
  }
}
.footers{
  margin-top: 10px;
  text-align: right;
}
</style>
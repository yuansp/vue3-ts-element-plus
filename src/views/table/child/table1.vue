<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="nickName" label="拼音" width="180" />
    <el-table-column prop="age" label="年龄" />
    <el-table-column prop="phone" label="电话" />
    <el-table-column prop="email" label="邮箱" />
    <el-table-column prop="address" label="地址" />
    <el-table-column prop="createTime" label="创建时间" />
  </el-table>
</template>
<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { gettable } from "@/api/table";
import { tableData } from "@/stype/stype";
export default defineComponent({
  setup() {
    const tabledata = reactive<{ data: tableData[] }>({
      data: [],
    });

    const getData = async () => {
      const res = await gettable();
      tabledata.data = res.data.data;
    };
    onMounted(() => {
      getData();
    });
    return {
      ...toRefs(tabledata),
    };
  },
});
</script>
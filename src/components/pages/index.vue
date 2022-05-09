<template>
  <el-config-provider :locale="locale">
    <el-pagination
      v-model:page-size="pageSize"
      :layout="layout"
      :page-size:number="pageSizes"
      :total="total"
    >
    </el-pagination>
  </el-config-provider>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import { ElPagination, ElConfigProvider } from "element-plus";
import langs from "element-plus/lib/locale/lang/zh-cn";
export default defineComponent({
  components: {
    ElPagination,
    ElConfigProvider,
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper",
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50, 100],
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  setup(props) {
    const name = "page";
    const locale = langs;
    return {
      props,
      name,
      locale
    };
  },
});
</script>
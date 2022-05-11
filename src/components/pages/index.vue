<template>
  <el-config-provider :locale="locale">
    <el-pagination
      background 
      :class="algin"
      v-model:currentPage="currentPage"
      v-model:page-size="currentpageSize"
      :layout="layout"
      :page-sizes:number="pageSizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </el-config-provider>
</template>
<script lang='ts'>
import { defineComponent,ref,watch } from "vue";
import { ElPagination, ElConfigProvider } from "element-plus";
import langs from "element-plus/lib/locale/lang/zh-cn";
export default defineComponent({
  components: {
    ElPagination,
    ElConfigProvider,
  },
  props: {
    algin: {
      type: String,
      default: "rights",
    },
    current:{
      type:Number,
      default:1
    },
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
    nexPage:{
      type:Function,
      required:true
    }
  },
  setup(props) {
    const name = "page";
    const locale = langs;
    const currentpageSize=ref(10);
    const currentPage=ref(1)
    watch(()=>props.current,(val)=>{
      if(val === 0){
        currentPage.value=1
        handleCurrentChange(1)
      }
    })
    const handleSizeChange = (val: number) => {
      const params={current:currentPage.value,size:val}
      props.nexPage(params)
    };
    const handleCurrentChange = (val: number) => {
      const params={current:val,size:currentpageSize.value}
      props.nexPage(params)
    };

    return {
      name,
      locale,
      currentPage,
      currentpageSize,
      handleSizeChange,
      handleCurrentChange,
    };
  },
});
</script>
<style lang="scss" scoped>
.rights {
  display: flex;
  justify-content: right;
}
.centers {
  display: flex;
  justify-content: center;
}
</style>
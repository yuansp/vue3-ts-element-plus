<template>
  <div>
    选中{{ dataLength.checkLength }}/{{ dataLength.dataLength }}
    <el-button @click="qx">取消选中</el-button>
  </div>
</template>
<script lang='ts'>
import { ElButton } from "element-plus";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    ElButton,
  },
  props: {
    dataLength: {
      type: Object,
      required: true,
    },
    canlselect:{
      type:Function,
      required:true
    }
  },
  setup(props){
    const qx = ()=>{
      props.canlselect()
    }
    return{
      qx
    }
  }
});
</script>
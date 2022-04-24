<template>
  <div>
    <input type="checkbox" v-model="selects">
    选中{{ cunt}}/全部{{ listdata.length }}
    <el-button @click="qx">取消选中</el-button>
  </div>
</template>
<script lang='ts'>
import { ElButton } from "element-plus";
import { defineComponent, computed } from "vue";
import { datalist } from "@/stype/stype";
export default defineComponent({
  components: {
    ElButton,
  },
  props: {
    dataLength: {
      type: Object,
      required: true,
    },
    delselect:{
      type:Function,
      required:true
    },
    listdata:{
      type:Array as () => datalist [],
      required:true
    },
    selectAll:{
      type:Function,
      required:true
    }
  },
  setup(props){
    const qx = ()=>{
      props.delselect()
    }
    const cunt = computed(()=>{
      return props.listdata.reduce((prv,listdata,index)=>prv+(listdata.checked?1:0),0)
    })
    const selects = computed({
      get(){
        return (cunt.value>0 && cunt.value === props.listdata.length)
      },
      set(val){
        props.selectAll(val)
      }
    })
    return{
      qx,
      cunt,
      selects
    }
  }
});
</script>
<template>
  <div class="items">
    <input type="checkbox" v-model="checkComputed" />
    <span>{{ listitem.name }}</span>
    <el-button @click.stop="dels" size="small" class="delbtn">删除</el-button>
  </div>
</template>
<script lang='ts'>
import { defineComponent,computed } from "vue";
import { datalist } from "@/stype/stype";
import { ElButton } from "element-plus";
export default defineComponent({
  components: {
    ElButton,
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
    listitem: {
      type: Object as () => datalist,
      required: true,
    },
    changeStatus: {
      type: Function,
      required: true,
    },
    deldata: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const dels = () => {
      props.deldata(props.index);
    };
    const checkComputed = computed<boolean>( {
      get(){
        return props.listitem.checked;
      },
      set(val){
        props.changeStatus(val,props.listitem);
      }
    });
    return {
      dels,
      checkComputed,
    };
  },
});
</script>
<style lang="scss" scoped>
.items {
  position: relative;
  .delbtn {
    display: none;
    position: absolute;
    right: 10px;
    top: 3px;
  }
}
.items:hover {
  background: rgb(174, 220, 90);
  .delbtn {
    display: block;
    position: absolute;
    right: 10px;
    top: 3px;
  }
}
</style>
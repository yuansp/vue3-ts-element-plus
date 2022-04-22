<template>
  <el-input
    v-model="inputValue"
    class="inputval"
    placeholder="请输入,按回车确认"
    @keyup.enter="getuser()"
  ></el-input>
</template>
<script lang='ts'>
import { defineComponent, ref } from "vue";
import { ElInput } from "element-plus";
export default defineComponent({
  components: {
    ElInput,
  },
  props: {
    adduser: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const inputValue = ref("");
    const getuser = () => {
      if (inputValue.value.trim()) {
        props.adduser(inputValue.value.trim());
        inputValue.value = "";
      }
    };
    return {
      inputValue,
      getuser,
    };
  },
});
</script>

<style lang="scss" scoped>
.inputval {
  margin-bottom: 30px;
  width: 30%;
}
</style>
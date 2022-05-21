<template>
  <div class="stepmains">
    <el-steps direction="vertical" space="20%" :active="1">
      <el-step v-for="(item, index) in lisData" :key="index" :title="item.title" description="1123"
        @click="nextSteps(index)" />
    </el-steps>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { ElSteps } from 'element-plus'
import clickStep from './hook'
export default defineComponent({
  components: {
    ElSteps
  },
  props: ['lisData', 'styles'],
  setup(props) {
    const nextSteps = (val: number) => {
      clickStep(props.styles, val)
    }
    return {
      ...toRefs(props.lisData),
      nextSteps
    }
  }
})
</script>
<style lang="scss" scoped>
.stepmains {
  position: fixed;
  top: 110px;
  right: 10px;
  width: 200px;
  background: #ff0;
}
</style>

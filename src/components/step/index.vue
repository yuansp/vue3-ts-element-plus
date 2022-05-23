<template>
  <div class="stepmains">
    <div>
      <div class="rows" v-for="(item, index) in lisData" :key="index" :class="{ 'active': index == active }"
        @click="nextSteps(index)">
        <span class="lines"></span>
        <span class="titles">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, ref, watch } from 'vue'
import clickStep from './hook'
export default defineComponent({
  props: ['lisData', 'styles'],
  setup(props) {
    let active = ref(0)
    const nextSteps = (val: number) => {
      active.value = val
      clickStep(props.styles, val)
    }
    return {
      active,
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
  // background: #ff0;
}

.rows {
  display: flex;
  height: 30px;
  cursor: pointer;
}

.titles {
  padding-left: 10px;
  line-height: 30px;
  color: rgba($color: #000000, $alpha: .5);
}

.lines {
  border: 2px solid rgba($color: #000000, $alpha: .3);
}

.active {
  .titles {
    color: rgba(0, 0, 255, 0.672);
  }

  .lines {
    border: 2px solid rgba(0, 0, 255, 0.672);
  }
}
</style>

<template>
  <div class="boxs">
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__zoomIn"
      leave-active-class="animate__zoomOutUp"
    >
      <item
        class="lis"
        v-for="(items, index) in listdata"
        :key="items.id"
        :listitem="items"
        :index="index"
        :deldata="deldata"
        :changeStatus="changeStatus"
      />
    </transition-group>
  </div>
</template>
<script lang='ts'>
import "animate.css";
import { defineComponent } from "vue";
import Item from "./item.vue";
export default defineComponent({
  components: {
    Item,
  },
  props: ["listdata", "changeStatus", "deldata"],
});
</script>
<style lang="scss" scoped>
.animate__animated.animate__backInRight {
  --animate-duration: 2s;
}
.boxs {
  width: 30%;
  padding: 0px;
  .lis {
    margin: 0;
    margin-bottom: 7px;
    padding: 0;
    height: 30px;
    line-height: 30px;
    border: 1px solid #aaa;
    list-style-type: none;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
  }
}
</style>
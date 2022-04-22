<template>
  <div>
    <ul class="boxs">
      <li class="lis" v-for="(items, index) in listdata" :key="index">
        <item :listitem="items" :index="index" :deldata="deldata" :changeStatus="changeStatus" />
      </li>
    </ul>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import Item from "./item.vue";
export default defineComponent({
  components: {
    Item,
  },
  props: ["listdata", "changeStatus","deldata"],
});
</script>
<style lang="scss" scoped>
.boxs {
  width: 30%;
  padding: 0px;
  border: 1px solid #aaa;
  border-bottom: none;
}
.lis {
  margin: 0;
  padding: 0;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #aaa;
  list-style-type: none;
}
</style>
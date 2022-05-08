<template>
  <slot :game="data"></slot>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { getgames } from "@/api/games";
interface games {
  id: string;
  name: string;
  nickName: string;
  time: number;
  createrTime: string;
}
export default defineComponent({
  setup() {
    const name = "list";
    const listdata = reactive<{ data: games[] }>({
      data: [],
    });
    const getData = async () => {
      const res = await getgames();
      listdata.data = res.data.data;
    };
    onMounted(() => {
      getData();
    });
    return {
      name,
      ...toRefs(listdata),
    };
  },
});
</script>

<template>
  <list-head :adduser="adduser"></list-head>
  <list :listdata="data" :deldata="deldata" :changeStatus="changeStatus">
  </list>
  <list-foot :dataLength="nums" :canlselect="canlselect"></list-foot>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref, toRefs,watchEffect } from "vue";
import ListHead from "./todolist/listhead.vue";
import List from "./todolist/list.vue";
import ListFoot from "./todolist/listfoot.vue";
import { datalist } from "@/stype/stype";
export default defineComponent({
  components: {
    ListHead,
    List,
    ListFoot,
  },
  setup() {
    const listdata = reactive<{ data: datalist[] }>({
      data: [
        {
          id: 1,
          name: "张三",
          checked: false,
        },
        {
          id: 2,
          name: "李四",
          checked: true,
        },
        {
          id: 3,
          name: "王五",
          checked: false,
        },
      ],
    });
    const checkNum = (arr: Array<any>) => {
      if (arr.length === 0) {
        return 0;
      } else {
        let num = 0;
        arr.forEach((item) => {
          if (item.checked) {
            num++;
          }
        });
        return num;
      }
    };
    const nums = reactive({
      dataLength: 0,
      checkLength: 0,
    });
    nums.dataLength = listdata.data.length;
    nums.checkLength = checkNum(listdata.data);
    const adduser = (name: string) => {
      let title = ref("");
      if (name !== "") {
        title.value = name;
        const obj = reactive({
          id: listdata.data.length + 1,
          name: title,
          checked: false,
        });
        listdata.data.unshift(obj);
      }
    };

    const changeStatus = (val: boolean, data: datalist) => {
      data.checked = val;
    };

    const deldata = (index: number) => {
      listdata.data.splice(index, 1);
    };
    const canlselect = () => {
      listdata.data.forEach((item) => {
        item.checked = false;
      });
    };
    watchEffect(() => {
      nums.dataLength = listdata.data.length;
      nums.checkLength = checkNum(listdata.data);
    });
    return {
      ...toRefs(listdata),
      adduser,
      changeStatus,
      deldata,
      nums,
      canlselect,
    };
  },
});
</script>
<style>
.lists1 {
  border-bottom: 1px solid #000;
  margin-top: 10px;
}
</style>
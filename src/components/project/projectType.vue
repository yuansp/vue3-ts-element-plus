<template>
  <el-select
    class="m-2 widths"
    v-model="value"
    placeholder="请选择，必填"
    @change="select"
  >
    <el-option
      v-for="item in data"
      :key="item.id"
      :label="item.type"
      :value="item.id"
    />
  </el-select>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive, toRefs, onMounted } from "vue";
import { ElSelect } from "element-plus";
import { getProjectType } from "@/api/project";
import { projectType } from "@/stype/project";
export default defineComponent({
  components: {
    ElSelect,
  },
  props: {
    selectType: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const value = ref("");
    const options = reactive<{ data: projectType[] }>({
      data: [],
    });
    const getData = async () => {
      const res = await getProjectType();
      options.data = res.data.data;
    };

    onMounted(() => {
      getData();
    });
    const select = (val: number) => {
      options.data.forEach((item) => {
        if (item.id === val) {
          props.selectType(item);
        }
      });
    };
    return {
      value,
      ...toRefs(options),
      select,
    };
  },
});
</script>
<style lang="scss" scoped>
.widths{
  width: 40%;
}
</style>

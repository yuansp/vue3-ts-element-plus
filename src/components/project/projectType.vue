<template>
  <el-select
    class="m-2 widths"
    size="large"
    v-model="value"
    placeholder="请选择，必填"
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
  setup() {
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
    return {
      value,
      ...toRefs(options),
    };
  },
});
</script>
<style lang="scss" scoped>
.widths{
  width: 50%;
}
</style>
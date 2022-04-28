<template>
  <div ref="mychart" style="width: 100%; height: 45vh"></div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { GaugeChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
export default defineComponent({
  setup() {
    echarts.use([
      TitleComponent,
      TooltipComponent,
      GridComponent,
      DatasetComponent,
      TransformComponent,
      GaugeChart,
      LabelLayout,
      UniversalTransition,
      CanvasRenderer,
    ]);
    const mychart = ref<HTMLElement | null>(null);

    let timer: any = null;
    onMounted(() => {
      const myCharts = ref<any>();
      myCharts.value = echarts.init(mychart.value!);
      let data = ref<number>(0);
      const setopinion = () => {
        data.value = Math.ceil(Math.random() * 100);
        myCharts.value.setOption({
          tooltip: {
            formatter: "{a} <br/>{b} : {c}%",
          },
          series: [
            {
              name: "Pressure",
              type: "gauge",
              progress: {
                show: true,
              },
              detail: {
                valueAnimation: true,
                formatter: "{value}",
              },
              data: [
                {
                  value: data.value,
                  name: "SCORE",
                },
              ],
            },
          ],
        });
      };
      timer = setInterval(setopinion, 3000);
      setopinion();
    });
    onUnmounted(() => {
      clearInterval(timer);
    });
    return {
      mychart,
    };
  },
});
</script>
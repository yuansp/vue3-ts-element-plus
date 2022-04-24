<template>
  <div ref="mychart" style="width: 100%; height: 40vh"></div>
</template>
<script lang='ts'>
import { defineComponent, ref, onMounted } from "vue";
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { RadarChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  VisualMapComponent
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
      VisualMapComponent,
      RadarChart,
      LabelLayout,
      UniversalTransition,
      CanvasRenderer,
      
    ]);
    const mychart = ref<HTMLElement | null>(null);
    let num = ref(0);
    onMounted(() => {
      const myCharts = ref<any>();
      myCharts.value = echarts.init(mychart.value!);
      let data = ref<number>(0);
      const setopinion = () => {
        myCharts.value.setOption({
          title: {
            text: "Proportion of Browsers",
            subtext: "Fake Data",
            top: 10,
            left: 10,
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            type: "scroll",
            bottom: 10,
            data: (function () {
              var list = [];
              for (var i = 1; i <= 28; i++) {
                list.push(i + 2000 + "");
              }
              return list;
            })(),
          },
          visualMap: {
            top: "middle",
            right: 10,
            color: ["red", "yellow"],
            calculable: true,
          },
          radar: {
            indicator: [
              { text: "IE8-", max: 400 },
              { text: "IE9+", max: 400 },
              { text: "Safari", max: 400 },
              { text: "Firefox", max: 400 },
              { text: "Chrome", max: 400 },
            ],
          },
          series: (function () {
            var series = [];
            for (var i = 1; i <= 28; i++) {
              series.push({
                type: "radar",
                symbol: "none",
                lineStyle: {
                  width: 1,
                },
                emphasis: {
                  areaStyle: {
                    color: "rgba(0,250,0,0.3)",
                  },
                },
                data: [
                  {
                    value: [
                      (40 - i) * 10,
                      (38 - i) * 4 + 60,
                      i * 5 + 10,
                      i * 9,
                      (i * i) / 2,
                    ],
                    name: i + 2000 + "",
                  },
                ],
              });
            }
            return series;
          })(),
        });
      };
      setopinion();
    });

    return {
      mychart,
    };
  },
});
</script>
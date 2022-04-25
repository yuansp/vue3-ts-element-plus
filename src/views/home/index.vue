<template>
  <div class="contents">
    <div class="chart">
      <el-card class="box-card">
        <gauge-chart />
      </el-card>
    </div>
    <div class="chart">
      <el-card class="box-card">
        <line-chart />
      </el-card>
    </div>
    <div class="chart">
      <el-card class="box-card">
        <pictorial-bar />
      </el-card>
    </div>
    <div class="chart">
      <el-card class="box-card">
        <radar />
      </el-card>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from "vue";
import GaugeChart from "./echarts/gauge.vue";
import LineChart from "./echarts/line1.vue";
import PictorialBar from "./echarts/pictorialBar.vue";
import Radar from "./echarts/radar.vue";
export default defineComponent({
  components: {
    GaugeChart,
    LineChart,
    PictorialBar,
    Radar,
  },
  setup() {

    return {};
  },
});
</script>
<style lang="scss" scoped>
.contents {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  .chart {
    float: left;
    padding: 10px;
    width: 45%;
    height: 45%;
    .box-card {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
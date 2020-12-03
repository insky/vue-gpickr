<template>
  <div class="wrapper" :style="`color: #000; background: ${ gradientString }`">
    <vue-gpickr 
      v-if="gradient"
      :isRadialGradient="isRadialGradient" 
      class="gpickr-wrapper" 
      v-model="gradient" 
    >
      <div slot="controls-wrapper" class="controls-wrapper">
        <button @click="toggleMode">click this to Toggle mode</button>
      </div>
      <div class="vue-gpickr-preview-container" slot="preview-container">
        <div class="vue-gpickr-preview"></div>
      </div>
      <div class="my-color-list" slot="custom-container">
        <h3>My color:</h3>
        <ul>
          <li v-for="(item, index) in myColorList" :key="index"
            :style="`background: ${item}`"
          ></li>
        </ul>
      </div>
    </vue-gpickr>
  </div>
</template>

<script>
import VueGpickr from "./src/VueGpickr";
import LinearGradient from "./src/LinearGradient";
import RadialGradient from "./src/RadialGradient";

const linearGradient = new LinearGradient({
  angle: 0,
  stops: [
    ["#0359b5", 0],
    ["#f6ce01", 1],
  ],
});

const radialGradient = new RadialGradient({
  stops: [
    ["#0359b5", 0],
    ["#f6ce01", 1],
  ],
});

export default {
  components: {
    VueGpickr,
  },
  mounted() {
    this.gradient = this.isRadialGradient ? radialGradient : linearGradient
  },
  data() {
    return {
      isRadialGradient: true,
      gradient: null,
      myColorList:  [
        "rgb(255, 255, 255)",
        "rgb(250, 250, 250)",
        "rgb(245, 245, 245)",
        "rgb(232, 232, 232)",
        "rgb(217, 217, 217)",
        "rgb(191, 191, 191)",
        "rgb(140, 140, 140)",
        "rgb(89, 89, 89)",
        "rgb(38, 38, 38)",
        "rgb(0, 0, 0)",
        "rgb(255, 241, 240)",
        "rgb(255, 204, 199)",
        "rgb(255, 163, 158)",
        "rgb(255, 120, 117)",
        "rgb(255, 77, 79)",
        "rgb(245, 34, 45)",
        "rgb(207, 19, 34)",
        "rgb(168, 7, 26)",
        "rgb(130, 0, 20)",
        "rgb(92, 0, 17)",
        "rgb(255, 251, 230)",
        "rgb(255, 241, 184)",
        "rgb(255, 229, 143)",
        "rgb(255, 214, 102)",
        "rgb(255, 197, 61)",
        "rgb(250, 173, 20)",
        "rgb(212, 136, 6)",
        "rgb(173, 104, 0)",
        "rgb(135, 77, 0)",
        "rgb(97, 52, 0)",
        "rgb(232, 245, 233)",
        "rgb(201, 229, 202)",
        "rgb(166, 213, 169)",
        "rgb(131, 198, 134)",
        "rgb(105, 186, 109)",
        "rgb(80, 174, 85)",
        "rgb(70, 159, 75)",
        "rgb(60, 141, 64)",
        "rgb(50, 124, 54)",
        "rgb(30, 93, 35)",
        "rgb(230, 247, 255)",
        "rgb(186, 231, 255)",
        "rgb(145, 213, 255)",
        "rgb(105, 192, 255)",
        "rgb(64, 169, 255)",
        "rgb(24, 144, 255)",
        "rgb(9, 109, 217)",
        "rgb(0, 80, 179)",
        "rgb(0, 58, 140)",
        "rgb(0, 39, 102)",
        "rgb(243, 229, 245)",
        "rgb(224, 191, 230)",
        "rgb(205, 149, 214)",
        "rgb(185, 107, 198)",
        "rgb(170, 76, 186)",
        "rgb(155, 47, 174)",
        "rgb(141, 44, 168)",
        "rgb(122, 39, 160)",
        "rgb(105, 35, 152)",
        "rgb(74, 28, 138)",
        "linear-gradient(rgb(180, 236, 81) 0%, rgb(66, 147, 33) 100%)",
        "linear-gradient(rgb(250, 217, 97) 0%, rgb(247, 107, 28) 100%)",
        "linear-gradient(rgb(245, 81, 95) 0%, rgb(159, 4, 27) 100%)",
        "linear-gradient(135deg, rgb(48, 35, 174) 0%, rgb(200, 109, 215) 100%)",
        "linear-gradient(90deg, rgb(48, 35, 174) 0%, rgb(83, 160, 253) 50%, rgb(180, 236, 81) 100%)",
        "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
        "linear-gradient(135deg, rgb(0, 222, 255) 0%, rgb(0, 139, 255) 100%)",
        "linear-gradient(135deg, rgb(255, 255, 255) 0%, rgb(0, 222, 255) 100%)",
        "linear-gradient(90deg, rgb(0, 255, 149) 0%, rgb(88, 142, 233) 100%)",
        "linear-gradient(rgb(61, 83, 231) 0%, rgb(35, 132, 255) 100%)",
        "linear-gradient(66deg, rgba(19, 107, 233, 0.94) 12%,rgba(14, 129, 239, 0.67) 65%,rgba(4, 170, 250, 0.19) 90%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(90deg, #c51385 0%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(120deg, rgb(251, 4, 4) 0%,#3000fb 99%)",
        "linear-gradient(120deg, #fb0404 12%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(66deg, #ebb708 12%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(66deg, #ebb708 12%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(66deg, rgb(235, 8, 8) 0%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(66deg, #eb0808 0%,rgba(18, 75, 72, 0.78) 11%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(90deg, #172c14 0%,rgba(18, 75, 72, 0.78) 0%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(90deg, #172c14 0%,rgba(18, 75, 72, 0.78) 0%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(0deg, #c13636 0%,rgba(187, 32, 32, 0.5) 100%)",
        "linear-gradient(90deg, rgb(243, 12, 37) 0%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(90deg, #f30c25 0%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(90deg, #ff0051 0%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(90deg, #00baff 0%,rgba(0, 186, 255, 0) 100%)"
      ]
    };
  },
  computed: {
    gradientString() {
      return (this.gradient || '').toString() 
    }
  },
  methods: {
    toggleMode() {
      this.isRadialGradient = !this.isRadialGradient
      this.gradient = null
      this.$nextTick(() => {
        this.gradient = this.isRadialGradient ? radialGradient : linearGradient
      })
    }
  }
};
</script>

<style lang='less' scoped>
.vue-gpickr-preview-container {
  width: 100%;
  height: 50px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMElEQVQ4T2N89uzZfwY8QFJSEp80A+OoAcMiDP7//483HTx//hx/Ohg1gIFx6IcBALl+VXknOCvFAAAAAElFTkSuQmCC);
  background-size: 10px;
  position: relative;
  .vue-gpickr-preview {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--bgStyle);
  }
}
.controls-wrapper {
  button {
    background: red;
  }
}
.gpickr-wrapper {
  padding: 0;
}

.my-color-list {
  width: 200px;
  ul {
    width: 100%;
    display: flex;
    padding: 5px 4px 5px 6px;
    flex-wrap: wrap;
    box-sizing: border-box;
    li {
      display: inline-block;
      width: 15px;
      height: 10px;
      margin-right: 2px;
      margin-top: 3px;
      cursor: pointer;
      box-sizing: border-box;
    }
  }
}
</style>

<style>
body {
  padding: 0;
  margin: 0
}
.wrapper {
  text-align: center;
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>

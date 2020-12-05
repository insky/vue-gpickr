
<template>
  <div class="wrapper" :style="`color: #000; background: ${ gradientString }`">
    <h2 @click="toggleGradientMode">change gradientMode</h2>
    <color-picker v-if="!gradientMode" v-model="currentColor" :preset-colors="null" />
    <vue-gpickr 
      v-if="gradientMode && gradient"
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
          <li @click="handlerColorChange(item)" v-for="(item, index) in myColorList" :key="index"
            :style="`background: ${item}`"
          ></li>
        </ul>
      </div>
    </vue-gpickr>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
// import VueGpickr from "./src/VueGpickr";
import { Sketch, VueGpickr, LinearGradient, RadialGradient, gradientParser } from './src/index'

const linearGradient = new LinearGradient({
  angle: 0,
  stops: [
    ["#0359b5", 0],
    ["#0359b5", 1],
  ],
});

const radialGradient = new RadialGradient({
  stops: [
    ["#0359b5", 0],
    ["#0359b5", 1],
  ],
});

export default {
  methods: {
    toggleGradientMode() {
      this.gradientMode = !this.gradientMode
    },
    toggleMode() {
      this.isRadialGradient = !this.isRadialGradient
      this.gradient = null
      this.$nextTick(() => {
        this.gradient = this.isRadialGradient ? radialGradient : linearGradient
      })
    },
    handlerColorChange(color) {
      let colorObj = null
      try {
        colorObj = gradientParser.parse(color)
        this.gradient = null
        this.isRadialGradient = false
        // console.group('--------------')
        // console.log(color, '// color origin');
        // console.log(colorObj, '// colorObj');
        // console.groupEnd()
        this.gradient = new LinearGradient(gradientParser.myFormat(colorObj[0]))
      } catch (error) {
        console.log(error, '// error');
      }
    }
  },
  components: {
    VueGpickr,
    colorPicker: Sketch
  },
  mounted() {
    this.gradient = this.isRadialGradient ? radialGradient : linearGradient
  },
  data() {
    return {
      gradientMode: false,
      currentColor: 'rgb(0, 18, 48)',
      isRadialGradient: true,
      gradient: null,
      myColorList:  [
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
        "linear-gradient(0deg, #c13636 0%,rgba(187, 32, 32, 0.5) 100%)",
        "linear-gradient(90deg, rgb(243, 12, 37) 0%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(90deg, #00baff 0%,rgba(0, 186, 255, 0) 100%)",
        "linear-gradient(90deg, #fff 0%,rgba(0, 0, 0, 1) 100%)"
      ]
    };
  },
  computed: {
    gradientString() {
      return (this.gradient || '').toString() 
    }
  },
  watch:{
    gradient: {
      handler(colorObj) {
        if (colorObj !== null) {
          console.log(colorObj.toString(), '// colorObj');
          console.log(colorObj.toRaw(), '//toRaw');
          console.log(gradientParser.parse(colorObj.toString()), '// parser');
          console.log(gradientParser.myFormat(gradientParser.parse(colorObj.toString())[0]), '// format');
        }
      },
      deep: true
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

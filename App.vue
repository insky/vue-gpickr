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
      gradient: null
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

<template>
  <div class="wrapper" :style="`color: #000; background: ${ gradientString }`">
    <vue-gpickr 
      v-if="gradient"
      :isRadialGradient="isRadialGradient" 
      class="gpickr" 
      v-model="gradient" 
    />
    <div>
      <h4>{{gradientString}}</h4>
      <h2 @click="toggleMode">
        click this to Toggle mode
      </h2>
    </div>
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

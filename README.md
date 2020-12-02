# vue-gpickr

[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

Vue gradient picker component. Inspired by [gpickr](https://simonwep.github.io/gpickr) and [vue-color](https://xiaokaike.github.io/vue-color/)
### [Demo](https://insky.github.io/vue-gpickr/)
  
![vue-gpickr](./scr.png?raw=true "How it looks")   
  
  
### Usage
```
npm i vue-gpickr
```

```js
<template>
  <vue-gpickr v-model="gradient" :isRadialGradient="isRadialGradient" />
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
```

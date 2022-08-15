# vue-gpickr

[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

Vue gradient picker component. Inspired by [gpickr](https://simonwep.github.io/gpickr) and [vue-color](https://xiaokaike.github.io/vue-color/)

> Vue 3 version. Lock your version on 0.4.2 to use with Vue 2

### [Demo](https://insky.github.io/vue-gpickr/)
  
![vue-gpickr](./scr.png?raw=true "How it looks")   
  
  
### Usage
```
npm i vue-gpickr
```

```js
<template>
  <vue-gpickr v-model="gradient" />
</template>

<script>
import { VueGpickr, LinearGradient } from 'vue-gpickr';

const gradient = new LinearGradient({
  angle: 0,
  stops: [
    ['#0359b5', 0],
    ['#f6ce01', 1]
  ]
});

export default {
  components: {
    VueGpickr
  },
  data() {
    return {
      gradient
    }
  }
};
</script>
```

### Additional Information

By using the code provided in this repository you agree with the following:

1. Russia has illegally annexed Crimea in 2014 and brought the war in Donbas followed by a full-scale invasion of Ukraine in 2022.
2. Russia has brought sorrow and devastation to millions of Ukrainians, killed hundreds of innocent people, damaged thousands of buildings, and forced several million people to flee.
3. Putin khuylo!

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

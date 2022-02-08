<template>
  <div class="wrapper">
    <a
      class="github-fork-ribbon"
      href="https://github.com/insky/vue-gpickr"
      title="Fork me on GitHub"
      >Fork me on GitHub</a
    >

    <h1>vue-gpickr</h1>

    <vue-gpickr class="gpickr" v-model="gradient" />

    <br /><br />
    <div class="text-left">
      {{ gradient.toString() }}
    </div>
    <pre class="text-left">{{ JSON.stringify(gradient.toRaw(), null, "  ") }}</pre>
  </div>
</template>

<script>
import VueGpickr from "./src/VueGpickr";
import LinearGradient from "./src/LinearGradient";

export default {
  components: {
    VueGpickr,
  },
  data() {
    const gradient = new LinearGradient({
      angle: 0,
      stops: [
        ["#0359b5", 0],
        ["#f6ce01", 1],
      ],
      limit: 5
    });

    return {
      gradient
    };
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 430px;
  margin: 100px auto;
  text-align: center;
}
.wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 300px;
  background: v-bind(gradient);
  z-index: 0;
}
h1 {
  position: relative;
  z-index: 1;
}
.gpickr {
  margin: 30px 0;
}
.text-left {
  text-align: left;
}

.github-fork-ribbon {
  width: 12.1em;
  height: 12.1em;
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 9999;
  pointer-events: none;
  font-size: 20px;
  text-decoration: none;
  text-indent: -999999px;
}
.github-fork-ribbon.fixed {
  position: fixed;
}
.github-fork-ribbon:before,
.github-fork-ribbon:after {
  position: absolute;
  display: block;
  width: 15.38em;
  height: 1.54em;
  top: 3.23em;
  right: -3.23em;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.github-fork-ribbon:before {
  content: "";
  padding: 0.38em 0;
  background-color: #a00;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0)),
    to(rgba(0, 0, 0, 0.15))
  );
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.15)
  );
  background-image: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.15)
  );
  background-image: -ms-linear-gradient(
    top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.15)
  );
  background-image: -o-linear-gradient(
    top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.15)
  );
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.15)
  );
  -webkit-box-shadow: 0 0.15em 0.23em 0 rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 0.15em 0.23em 0 rgba(0, 0, 0, 0.5);
  box-shadow: 0 0.15em 0.23em 0 rgba(0, 0, 0, 0.5);
  pointer-events: auto;
}
.github-fork-ribbon:after {
  content: attr(title);
  color: #fff;
  font: 700 1em "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.54em;
  text-decoration: none;
  text-shadow: 0 -0.08em rgba(0, 0, 0, 0.5);
  text-align: center;
  text-indent: 0;
  padding: 0.15em 0;
  margin: 0.15em 0;
  border-width: 0.08em 0;
  border-style: dotted;
  border-color: #fff;
  border-color: rgba(255, 255, 255, 0.7);
}
.github-fork-ribbon.left-top,
.github-fork-ribbon.left-bottom {
  right: auto;
  left: 0;
}
.github-fork-ribbon.left-bottom,
.github-fork-ribbon.right-bottom {
  top: auto;
  bottom: 0;
}
.github-fork-ribbon.left-top:before,
.github-fork-ribbon.left-top:after,
.github-fork-ribbon.left-bottom:before,
.github-fork-ribbon.left-bottom:after {
  right: auto;
  left: -3.23em;
}
.github-fork-ribbon.left-bottom:before,
.github-fork-ribbon.left-bottom:after,
.github-fork-ribbon.right-bottom:before,
.github-fork-ribbon.right-bottom:after {
  top: auto;
  bottom: 3.23em;
}
.github-fork-ribbon.left-top:before,
.github-fork-ribbon.left-top:after,
.github-fork-ribbon.right-bottom:before,
.github-fork-ribbon.right-bottom:after {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
</style>

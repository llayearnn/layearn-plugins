<template>
  <svg aria-hidden="true" :width="width" :height="height">
    <use :xlink:href="iconName" fill="black"></use>
  </svg>
</template>

<script>
// 引入本地的svg文件
// 定义一个加载目录的函数
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("@/assets/icons", false, /\.svg$/);
// 加载目录下的所有的 svg 文件
requireAll(req);

export default {
  name: "LySvg",
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "black",
    },
    width: {
      type: String,
      default: "16px",
    },
    className: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "16px",
    },
    SvgStyle: Object,
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      } else {
        return "svg-icon";
      }
    },
  },
  mounted() {
    console.log(" props", this.name);
  },
};
</script>

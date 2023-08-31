import SvgIcon from "./src/index.vue";

SvgIcon.install = (Vue) => {
  Vue.component(SvgIcon.name, SvgIcon);
};
export default SvgIcon;

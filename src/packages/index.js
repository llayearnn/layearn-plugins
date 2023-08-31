import Button from "../packages/button";
import SvgIcon from "../packages/svg-icon";
const components = [Button, SvgIcon];

// eslint-disable-next-line no-unused-vars
const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
export default {
  install,
  // Button
  ...components,
};

import Button from '../packages/button/index.js';

const components=[
  Button
]

// eslint-disable-next-line no-unused-vars
const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });

}
export default {
  install,
  // Button
  ...components
}

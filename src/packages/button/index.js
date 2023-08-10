import LayearnButton from './src/LayearnButton.vue'
// export default{
//   install:(Vue)=>{
//     Vue.component('ly-button', LayearnButton);

//   }
// }
LayearnButton.install = function(Vue){
  Vue.component('ly-button', LayearnButton);
}
export default LayearnButton
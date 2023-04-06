import CButton from "./index.vue";

CButton.install = function (Vue) {
  Vue.component(CButton.name, CButton);
};

export default CButton;

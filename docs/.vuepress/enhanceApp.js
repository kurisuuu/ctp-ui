import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import CUI from "../../dist/index/index";
import "../../dist/style/index.css";
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
}) => {
  // ...apply enhancements to the app
  Vue.use(ElementUI);
  Vue.use(CUI);
};

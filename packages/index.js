import CButton from "./c-button";
import CIcon from "./c-icon";

const components = [CButton, CIcon];

const install = (app) => {
  components.forEach((Component) => {
    app.component(Component.name, Component);
  });
};

export default install;

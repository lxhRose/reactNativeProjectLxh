/*
 * @description 模板 请将文件中 template/Template 替换成你实际的命名
 * @author 吕兴海
 * @update 2019/11/02
 */
import { connect } from 'react-redux';
import Template from "./index";
import {
  templateAction,
} from "./action";

const mapStateToProps = state => {
  const {
    template,
  } = state.templateReducer;

  return {
    template: template,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    templateAction: (template) => {
      dispatch(templateAction(template));
    }
  }
}

const ConnectedTemplate = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template);

export default ConnectedTemplate;

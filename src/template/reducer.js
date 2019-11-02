/*
 * @description 模板。1、请将文件中 template/Template 替换成你实际的命名；2、补全 types 导入路径；3、更新注释。
 * @author 吕兴海
 * @update 2019/11/02
 */
import * as types from "";

const initState = {
  template: false
}

const templateReducer = (state = initState, action) => {
  switch (action.type) {
    case types.template:
      return {
        ...state,
        template: action.template,
      }
    default:
      return state
  }
}

export default templateReducer;

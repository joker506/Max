import Vue from 'vue'
import { filter, forEach, isUndefined, isEmpty, isArray, includes, find, cloneDeep, assign } from 'lodash-es'

Vue.prototype.$lodash = {
  isUndefined,
  isEmpty,
  isArray,
  includes,
  filter,
  find,
  forEach,
  cloneDeep,
  assign,
};

const _lodash = {
  filter,
  forEach,
};

// Plugin.install = function(Vue, options) {
//   Object.defineProperties(Vue.prototype, {
//     $lodash: {
//       get() {
//         return _lodash;
//       }
//     },
//   });
// };
//
// Vue.use(Plugin)

export default Plugin;

import Vue from 'vue'
import dayjs from 'dayjs'
import * as LocalizedFormat from 'dayjs/plugin/localizedFormat';

Vue.prototype.$day = dayjs

dayjs.extend(LocalizedFormat);
Vue.filter('formatDate', (value, format) => {
  if (!value) return '';

  return dayjs(value).format(format);
});

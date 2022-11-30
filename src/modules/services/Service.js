import axios from 'axios';
import queryString from 'query-string';
import lodash from 'lodash';

class Service {
  constructor() {
    this.axios = axios;
    this.queryString = queryString;
    this.lodash = lodash;
  }

  ObjectToFormData(data) {
    const formData = new FormData();
    this.lodash.forEach(data, (value, key) => {
      if (this.lodash.isArray(value)) {
        this.lodash.forEach(value, (arrValue) => {
          formData.append(`${key}[]`, arrValue);
        });
      } else {
        formData.append(key, value);
      }
    });
    return formData;
  }
}

export default Service;

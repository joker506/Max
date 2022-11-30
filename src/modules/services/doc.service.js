import Service from "./Service";

class DocService extends Service {
  constructor(config) {
    super();
    Object.assign(this, config);
  }

  async DOCS(data) {
    try {
      const res = await this.axios.get(
        `https://jsonplaceholder.typicode.com/users`,
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async DOC(data) {
    try {
      const res = await this.axios.get(
        `https://jsonplaceholder.typicode.com/users/` + data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
}

export default DocService;

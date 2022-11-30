import Service from "./Service";

class AuthService extends Service {
  constructor(config) {
    super();
    Object.assign(this, config);
  }

  async signIn(data) {
    try {
      //const res = await this.axios.post(`/api/auth/login`, data);

      const res = await this.axios.post(
        `https://api.medd.pro/auth/jwt/create/`,
        data
      );

      return res;
    } catch (error) {
      return error.response;
    }
  }
}

export default AuthService;

import Service from "./Service";

class SignService extends Service {
  constructor(config) {
    super();
    Object.assign(this, config);
  }

  async getGroups() {
    try {
      //const res = await this.axios.post(`/api/auth/login`, data);
      const res = await this.axios.get(
        `https://api.medd.pro/accounts/groups/all/`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async sendGroup(data) {
    try {
      const res = await this.axios.get(
        `https://api.medd.pro/accounts/groups/${data}/`,
        console.log(data)
        //data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async signUpAnonum(data) {
    console.log(data);
    try {
      const res = await this.axios.post(
        `https://api.medd.pro/accounts/signup/`,
        //console.log(data)
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async signUpVerifyEmailUser(data) {
    try {
      const res = await this.axios.post(
        `https://api.medd.pro/accounts/verify/email/`,
        //console.log(data)
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async signUpVerifyPhoneUser(data) {
    try {
      const res = await this.axios.post(
        `https://api.medd.pro/accounts/verify/phone/`,
        //console.log(data)
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async signUpCompany(data) {
    try {
      const res = await this.axios.post(
        `https://api.medd.pro/accounts/company/signup/`,
        //console.log(data)
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async signUpVerifyEmailCompany(data) {
    try {
      const res = await this.axios.post(
        `https://api.medd.pro/accounts/verify/email/`,
        //console.log(data)
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async signUpResendVerifyPhoneCompany(data) {
    try {
      const res = await this.axios.post(
        `https://api.medd.pro/accounts/verify/resend/phone/`,
        //console.log(data)
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async signUpResendVerifyEmailCompany(data) {
    try {
      const res = await this.axios.post(
        `https://api.medd.pro/accounts/verify/resend/email/`,
        data
        //data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async signUpSetCompany(data) {
    try {
      const res = await this.axios.patch(
        `https://api.medd.pro/accounts/company/set_information/`,
        //console.log(data)
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async signUpVerifyPhoneCompany(data) {
    console.log(data);
    try {
      const res = await this.axios.post(
        `https://api.medd.pro/accounts/company/verify/send_sms/`,
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async signUpCodePhoneCompany(data) {
    console.log(data);
    try {
      const res = await this.axios.post(
        `https://api.medd.pro/accounts/verify/phone/`,
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async signUpPassword(data) {
    try {
      const res = await this.axios.patch(
        `https://api.medd.pro/accounts/password/set/`,
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async setInfoAnonymUser(data) {
    try {
      const res = await this.axios.patch(
        `https://api.medd.pro/accounts/profile/set_information/`,
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }

  async getPositionUser() {
    try {
      const res = await this.axios.post(`https://ipapi.co/json/`);
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async getAllCountries() {
    try {
      const res = await this.axios.get(
        //`https://restcountries-v1.p.rapidapi.com/all`
        `https://restcountries.eu/rest/v2/all`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async getSearchCountries(query) {
    try {
      const res = await this.axios.get(
        `https://restcountries.eu/rest/v2/name/${query}`
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async SetUserLocation(data) {
    try {
      const res = await this.axios.patch(
        `https://api.medd.pro/accounts/profile/set_location/`,
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
  async SetCompanyLocation(data) {
    try {
      const res = await this.axios.patch(
        `https://api.medd.pro/accounts/company/set_location/`,
        data
      );
      return res;
    } catch (error) {
      return error.response;
    }
  }
}

export default SignService;

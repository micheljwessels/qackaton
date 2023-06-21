import { UserParam } from "../data/userData";
import BasicRequester from "./basicRequester";

export default class UsersRequester extends BasicRequester {
  async addUser(testCase: UserParam) {
    const {
      firstName,
      lastName,
      email,
      password,
      description,
      expectedMessage,
    } = testCase;
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    return await this.client.post("users").send(body);
  }

  async loginUser(testCase: UserParam) {
    const {
      firstName,
      lastName,
      email,
      password,
      description,
      expectedMessage,
    } = testCase;
    let body = {
      email: email,
      password: password,
    };

    return await this.client.post("users/login").send(body);
  }

  async deleteUser(token: string) {
    const header = {
      Authorization: `Bearer ${token}`,
    };

    return await this.client.delete("users/me").set(header);
  }
  async loginUserNoPassword(testCase: UserParam) {
    const {
      firstName,
      lastName,
      email,
      password,
      description,
      expectedMessage,
    } = testCase;
    let body = {
      email: email,
      password: password,
    };

    return await this.client.post("users/login").send(body);
  }

  async loginUserWithInvalidPassword(testCase: UserParam) {
    const { email, password } = testCase;
    let body = {
      email: email,
      password: password,
    };

    return await this.client.post("users/login").send(body);
  }
}

import { UserParam } from "../data/userData";
import BasicRequester from "./basicRequester";

export default class UsersRequester extends BasicRequester {
  async addUser(testCase: UserParam) {
    const {firstName, lastName, email, password, description, expectedMessage} = testCase;
    const body = {
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "password": password
    }

    return await this.client.post('users').send(body);
  }

  async loginUser(username: string, password: string) {
  let  body = {
      "email": username,
      "password": password
  }
  return await this.client.post('users/login').send(body);
  }
}
import request  from "supertest";
import BasicRequester from "./basicRequester";

export default class UsersRequester extends BasicRequester {

  async loginUser(username: string, password: string) {
  let  body = {
      "email": username,
      "password": password
  }
  return await this.client.post('users/login').send(body);
  }
}
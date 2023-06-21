import { expect } from "chai";
import UserData, { UserParam } from "../data/userData";
import UsersRequester from "../requests/usersRequester";

describe('User delete endpoint', () => {
  const userData = new UserData();
  const userRequest = new UsersRequester();
  let token ='';
  let user: UserParam;

  before(async () => {
    const users = userData.getCreateUserData();
    user = users[0];
    await  userRequest.addUser(user)
    const response = await userRequest.loginUser(user)
    token = response.body['token'];
  });


  it('should delete user ', async() => {
    const deleteResponse = await userRequest.deleteUser(token);
    const loginResponse = await userRequest.loginUser(user);

    expect(deleteResponse.statusCode).to.equal(200);
    expect(loginResponse.statusCode).to.equal(401);
  });
});
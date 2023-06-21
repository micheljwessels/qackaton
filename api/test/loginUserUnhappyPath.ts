const { expect } = require("chai");
import UserData from "../data/userData";
import UsersRequester from "../requests/usersRequester";

describe("#Unhappy path - User create endpoint ", () => {
  const userData = new UserData();
  const userRequest = new UsersRequester();

  userData.getLoginUser().forEach((testCase) => {
    const { email, password, description } = testCase;

    it("#TC - 2 - should not create user if " + description, async () => {
      const response = await userRequest.loginUserWithInvalidPassword(testCase);
      
      expect(response.statusCode).to.equal(401);
    });
  });
});

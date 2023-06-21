const { expect } = require("chai");
import UserData from "../data/userData";
import UsersRequester from "../requests/usersRequester";

describe("User create endpoint ", () => {
  const userData = new UserData();
  const userRequest = new UsersRequester();

  userData.getLoginUser().forEach((testCase) => {
    const { email, password, description } = testCase;
    it("should not create user if " + description, async () => {
      const response = await userRequest.loginUserWithInvalidPassword(testCase);
      expect(response.statusCode).to.equal(401);
      // expect(response.body).to.equal(expectedMessage)
    });
  });
});

const { expect } = require("chai");
import UserData from "../data/userData";
import UsersRequester from "../requests/usersRequester";

describe("#Unhappy path - User create endpoint ", () => {
  const userData = new UserData();
  const userRequest = new UsersRequester();

  userData.getUsers().forEach((testCase) => {
    const {
      firstName,
      lastName,
      email,
      password,
      description,
      expectedMessage,
    } = testCase;
    it("#TC - 1 - should not create user if " + description, async () => {
      const response = await userRequest.addUser(testCase);
      expect(response.statusCode).to.equal(400);
      // expect(response.body).to.equal(expectedMessage)
    });
  });
});

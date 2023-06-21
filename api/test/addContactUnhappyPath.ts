import { expect } from "chai";
import ContactData from "../data/contactData";
import UserData, { UserParam } from "../data/userData";
import ContactRequester from "../requests/contactRequester";
import UsersRequester from "../requests/usersRequester";

describe('Contact add endpoint', () => {
  const userData = new UserData();
  const contactData = new ContactData();
  const userRequest = new UsersRequester();
  const contactRequest = new ContactRequester();
  let token ='';
  let user: UserParam;

  before(async () => {
    const users = userData.getReadyUserData();
    user = users[0];
    let response;
    response = await userRequest.loginUser(user);
    console.log(response.statusCode)
    if(response.statusCode != 200){
      await  userRequest.addUser(user)
      response = await userRequest.loginUser(user);
    }
    token = response.body['token'];
  });

contactData.getContactsUnhappyPath().forEach(testCase => {
  const {firstName, lastName, birthdate, email, phone, street1, street2, city, stateProvince, postalCode, country, description, message} = testCase;
    it('should not create contact if ' + description, async() => {
    const contactResponse = await contactRequest.addContact(testCase, token);
    expect(contactResponse.statusCode).to.equal(400);
    expect(contactResponse.body['message']).to.equal(message)
  });
})
});
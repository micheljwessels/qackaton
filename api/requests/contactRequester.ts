import { ContactParam } from "../data/contactData";
import BasicRequester from "./basicRequester";

export default class ContactRequester extends BasicRequester {

  async addContact(testCase: ContactParam, token: string){
    const {firstName, lastName, birthdate, email, phone, street1, street2, city, stateProvince, postalCode, country, description} = testCase;
    const body = {
      "firstName": firstName,
      "lastName": lastName,
      "birthdate": birthdate,
      "email": email,
      "phone": phone,
      "street1": street1,
      "street2": street2,
      "city": city,
      "stateProvince": stateProvince,
      "postalCode": postalCode,
      "country": country
    }

    const header = {
      'Authorization': `Bearer ${token}`,
    }

    return await this.client.post('contacts').send(body).set(header);
  }
}
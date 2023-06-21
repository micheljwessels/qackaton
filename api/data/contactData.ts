export interface ContactParam {
  firstName?: string;
  lastName?: string ;
  birthdate?: string;
  email?: string;
  phone?: string;
  street1: string;
  street2: string;
  city:string;
  stateProvince: string;
  postalCode: string;
  country: string;
  description?: string;
  message?: string
}

export default class ContactData {
  getContactsUnhappyPath(): ContactParam[] {
    return [
      {
        firstName: '',
        lastName: 'Doe',
        birthdate: "1970-01-01",
        email: 'jdoe@fake.com',
        phone: '8005555555',
        street1: '1 Main St.',
        street2: 'Apartment A',
        city: 'Anytown',
        stateProvince: 'KS',
        postalCode: '12345',
        country: 'USA',
        description: 'empty first name',
        message: 'Contact validation failed: firstName: Path `firstName` is required.'
      },
      {
        firstName: 'Joe',
        lastName: 'Doe',
        birthdate: "1970-0101",
        email: 'jdoe@fake.com',
        phone: '8005555555',
        street1: '1 Main St.',
        street2: 'Apartment A',
        city: 'Anytown',
        stateProvince: 'KS',
        postalCode: '12345',
        country: 'USA',
        description: 'invalid phone number',
        message: 'Contact validation failed: birthdate: Birthdate is invalid'
      },
      {
        firstName: 'Joa',
        lastName: 'Doe',
        birthdate: "1970-01-01",
        email: 'jdoe@fake',
        phone: '8005555555',
        street1: '1 Main St.',
        street2: 'Apartment A',
        city: 'Anytown',
        stateProvince: 'KS',
        postalCode: '12345',
        country: 'USA',
        description: 'invalid email address',
        message: 'Contact validation failed: email: Email is invalid'
      },
    ]
  }
}
export interface UserParam {
  firstName?: string;
  lastName?: string ;
  email?: string;
  password?: string;
  description?: string;
  expectedMessage: string;
}

export default class UserData {
  getUsers(): UserParam[] {
    return [
      {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        description: 'empty data',
        expectedMessage: 'Email address is already in use'
      },
      {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'wrongEmail',
        password: 'password123',
        description: 'incorrect email address',
        expectedMessage: 'Email address is already in use'
      },
      {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'test@test.wp',
        password: 'pass',
        description: 'password too short',
        expectedMessage: 'Email address is already in use'
      },
    ]
  }
}

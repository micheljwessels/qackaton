export interface UserParam {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  description?: string;
  expectedMessage?: string;
}

export default class UserData {
  getUsers(): UserParam[] {
    return [
      {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        description: "empty data",
        expectedMessage: "Email address is already in use",
      },
      {
        firstName: "firstName",
        lastName: "lastName",
        email: "wrongEmail",
        password: "password123",
        description: "incorrect email address",
        expectedMessage: "Email address is already in use",
      },
      {
        firstName: "firstName",
        lastName: "lastName",
        email: "test@test.wp",
        password: "pass",
        description: "password too short",
        expectedMessage: "Email address is already in use",
      },
    ];
  }

  getCreateUserData(): UserParam[] {
    return [
      {
        firstName: "userToBeCreated",
        lastName: "userToBeCreated",
        email: "test333@test.wp",
        password: "passPASS",
        description: "",
        expectedMessage: "",
      },
    ];
  }
  getLoginUser(): UserParam[] {
    return [
      {
        email: "test333@test.wp",
        password: "wrongPassword",
        description: "Invalid Password",
      },
      {
        email: "invalidEmail",
        password: "passPASS",
        description: "Invalid Email",
      },
      {
        email: "",
        password: "passPass",
        description: "No email",
      },
      {
        email: "test333@test.wp",
        password: "",
        description: "No password",
      },
      {
        email: "",
        password: "",
        description: "No credentials",
      },
    ];
  }

  getReadyUserData():  UserParam[] {
    return [
      {
        firstName: 'userToBeCreated',
        lastName: 'userToBeCreated',
        email: 'test3@fake.com',
        password: 'myNewPassword',
        description: 'password too short',
        expectedMessage: 'Email address is already in use'
      },
    ]
  }
}

import  request from 'supertest';

export default class BasicRequester {
  url: string;
  client: any;

  constructor(){
    this.url = 'https://thinking-tester-contact-list.herokuapp.com/';
    this.client = request('https://thinking-tester-contact-list.herokuapp.com/')
  }
}